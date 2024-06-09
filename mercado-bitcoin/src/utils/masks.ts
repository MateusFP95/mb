export const maskPhone = (value: string) => {
  const cleanedValue = value.replace(/\D/g, '');
  if(!cleanedValue) return '';
  const match = cleanedValue.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
  if (match) {
    return `(${match[1]}${match[1].length === 2 ? ')' : ''} ${match[2]}${match[2].length === 5 ? '-' : ''}${match[3]}`;
  }
  return value;
};

export const maskCPF = (value: string) => {
  const cleanedValue = value.replace(/\D/g, '');
  if(!cleanedValue) return '';
  const match = cleanedValue.match(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/);
  if (match) {
    return `${match[1]}${match[1].length === 3 ? '.' : ''}${match[2]}${match[2].length === 3 ? '.' : ''}${match[3]}${match[3].length === 3 ? '-' : ''}${match[4]}`;
  }
  return value;
};

export const maskCNPJ = (value: string) => {
  const cleanedValue = value.replace(/\D/g, '');
  if(!cleanedValue) return '';
  const match = cleanedValue.match(/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})$/);
  if (match) {
    return `${match[1]}${match[1].length === 2 ? '.' : ''}${match[2]}${match[2].length === 3 ? '.' : ''}${match[3]}${match[3].length === 3 ? '/' : ''}${match[4]}${match[4].length === 4 ? '-' : ''}${match[5]}`;
  }
  return value;
};