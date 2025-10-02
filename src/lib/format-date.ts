type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export const formatDate = (date: string | Date, dateStyle: DateStyle = 'medium', locale: string = 'en-US') => {
    return new Intl.DateTimeFormat(locale, { dateStyle }).format(typeof date === 'string' ? new Date(date) : date);
};