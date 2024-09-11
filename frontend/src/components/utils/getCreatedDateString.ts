export const getCreatedDateString = (date: string) => {
    const CreatedDateString = new Date(date)
    .toLocaleDateString("ru", 
        { year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
          });
    return CreatedDateString;
}