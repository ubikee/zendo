
const Collections = {

  sortBy(collection, fieldName) {
    return collection.sort((a, b) => {
      const value1 = a[fieldName].toUpperCase();
      const value2 = b[fieldName].toUpperCase();
      return value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
    });
  },

  correlatives(collection) {
    return collection.map((item,index) => {
      const nextItem = collection[index+1];
      return nextItem ? [item, nextItem] : null;
    }).filter(x => x)
  },


  groupBy(collection, fieldName, groupDecorator) {
    const result = [];
    const sorted = this.sortBy(collection, fieldName);

    const groupData = (id) => {
        const data = groupDecorator ? groupDecorator(id) : {}
        return {
          grouper: true,
          title: id,
          data,
        }
    }

    if (sorted.length > 0) result.push(groupData(sorted[0][fieldName]));

    Collections.correlatives(sorted).forEach( pair => {
      result.push(pair[0]);
      if (pair[0][fieldName] != pair[1][fieldName]) {
        result.push(groupData(pair[1][fieldName]));
      }
    });
    if (sorted.length > 0) result.push(sorted[sorted.length - 1]);

    return result;
  }

}

export default Collections;
