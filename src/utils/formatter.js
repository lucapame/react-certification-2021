class Formatter {
  formatDate = (date) => {
    return new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(
      new Date(date)
    );
  };
}

module.exports = new Formatter();
