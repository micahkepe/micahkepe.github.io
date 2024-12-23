/**
 * Represents a file in the file system. A file has a name and content.
 */
export interface File {
  name: string;
  content: string;
  createdAt?: number;
  lastModifiedAt?: number;
  createdBy?: string;
  lastModifiedBy?: string;
  permissions?: string;
}

/**
 * Represents a dictory in the filesystem. A directory has a name and children.
 * The children can be files or directories.
 */
export interface Directory {
  name: string;
  children: Array<File | Directory>;
  createdAt?: number;
  lastModifiedAt?: number;
  createdBy?: string;
  lastModifiedBy?: string;
  permissions?: string;
}

/**
 * Represents the filesystem. The filesystem has a root directory.
 * The root directory is the top-level directory in the filesystem.
 * The root directory has a name and children. The children can be files or directories.
 * The root directory is the starting point for all filesystem operations.
 * NOTE: There is a `FileSystem` type in MDN Web Docs, so we use `LocalFileSystem` instead.
 */
export interface LocalFileSystem {
  root: Directory;
}

/**
 * Initializes the filesystem with a root directory.
 * The root directory is the top-level directory in the filesystem.
 */
export function initFileSystem(): Promise<LocalFileSystem> {
  const rootDirectory: Directory = {
    name: "/",
    children: [],
  };

  const files = import.meta.glob("./files/**/*", {
    query: "?raw",
    import: "default",
  });

  console.log("files");
  console.log(files);

  const filePromises = Object.entries(files).map(([filePath, loadFile]) => {
    const parts = filePath.replace("./files/", "").split("/");
    const fileName = parts.pop()!; // The last part is the file name

    return loadFile().then((content) => {
      let currentDir = rootDirectory;

      // Traverse the directory structure to find or create nested directories
      for (const part of parts) {
        let dir = currentDir.children.find(
          (child) =>
            (child as Directory).name === part && !(child as File).content,
        ) as Directory;

        if (!dir) {
          dir = { name: part, children: [] };
          currentDir.children.push(dir);
        }

        currentDir = dir;
      }

      currentDir.children.push({
        name: fileName,
        content,
      } as File);
    });
  });

  return Promise.all(filePromises)
    .then(() => ({ root: rootDirectory }))
    .catch((error) => {
      console.error("Failed to initialize file system:", error);
      return { root: { name: "/", children: [] } };
    });
}

/**
 * Utility function to find a file in a directory.
 * @param currentDir The directory to search in.
 * @param fileName The name of the file to find.
 * @returns The file if found, otherwise null.
 */
export function findDirectory(
  currentDir: Directory,
  path: string,
): Directory | null {
  if (path === "/") return currentDir;
  const parts = path.split("/").filter(Boolean);
  let dir: Directory | null = currentDir;

  for (const part of parts) {
    const found = dir?.children.find(
      (child) => child.name === part && !(child as File).content,
    ) as Directory;
    if (found) {
      dir = found;
    } else {
      return null;
    }
  }
  return dir;
}
