function parseSort(sort, multidomain) {
  if (typeof sort === 'string') {
    const sortOrder = sort === 'asc' ? 'asc' : 'desc';
    return multidomain ? multidomain.sort(sortOrder) : sortOrder;
  } else if (typeof sort === 'object') {
    const sortFields = Object.keys(sort);
    return sortFields.map((field) => ({ field, order: sort[field] }));
  }
  throw new Error('Invalid sort parameter');
}
