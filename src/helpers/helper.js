class Helper {
    getOffset(currentPage = 1, listPerPage) {
        return (currentPage - 1) * [listPerPage] 
    }

    emptyOrRows(rows) {
        if (!rows) {
          return [];
        }
        return rows;
    }
}

export default new Helper