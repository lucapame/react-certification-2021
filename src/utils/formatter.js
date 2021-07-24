class Formatter {
  formatDate = (date) => {
    return new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(
      new Date(date)
    );
  };

  formatStatus = (status) => {
    switch (status) {
      case 0:
        return 'Pago Pendiente';

      case 1:
        return 'Entrega Pendiente';

      case 2:
        return 'Entregada';

      default:
        return 'Revisar Orden';
    }
  };
}

module.exports = new Formatter();
