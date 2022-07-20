export const FormatDateMMMD = (dateString: string): string => {
//   const date = new Date(dateString);
//   return `${date.toLocaleDateString('en-us', { month: 'long' })} ${date.getDate()}`;

const fechaNueva = new Date(dateString);
    const opciones = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    };

    return fechaNueva.toLocaleString('es-ES', opciones as any);

};
