/**
 * Get a template element from the document by ID
 *
 * @param id the ID of the template element
 * @returns the template element
 * @throws an error if the element is not found
 * @throws an error if the element is not an HTMLTemplateElement
 */
export function getTemplate(id: string): HTMLTemplateElement {
  const template = document.querySelector(id);
  if (!(template instanceof HTMLTemplateElement)) {
    throw new Error(`Error: ${id} is not a template`);
  }
  return template;
}
