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
}

/**
 * Represents the filesystem. The filesystem has a root directory.
 * The root directory is the top-level directory in the filesystem.
 * The root directory has a name and children. The children can be files or directories.
 * The root directory is the starting point for all filesystem operations.
 */
export interface FileSystem {
  root: Directory;
}

/**
 * Initializes the filesystem with a root directory.
 * The root directory is the top-level directory in the filesystem.
 */
export function initFileSystem(): FileSystem {
  return {
    root: {
      name: "/",
      children: [
        { name: "about.md", content: "Hello! I'm Micah Kepe." },
        { name: "blog", children: [] },
        { name: "contact.md", content: "" },
        { name: "experience", children: [] },
        { name: "projects", children: [] },
      ],
    },
  };
}

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
