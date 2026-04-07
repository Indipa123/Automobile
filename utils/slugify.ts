export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const carSlug = (make: string, model: string, year: number, id: string): string => {
  return `${slugify(make)}-${slugify(model)}-${year}-${id}`
}
