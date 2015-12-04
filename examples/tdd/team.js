function TeamManager() {
  this.members = [];

  this.add = function(name) {
    this.members.push(name);
  }

  this.remove = function(name) {
    this.members.splice(this.members.indexOf(name), 1);
  }

  this.sort = function(sortBy) {
    function lastName(a, b) {
      lastNameA = a.split(" ")[1];
      lastNameB = b.split(" ")[1];

      if(lastNameA > lastNameB) return 1;
      if(lastNameA < lastNameB) return -1;
      return 0;
    }

    if(sortBy && sortBy == "lastName") {
      this.members.sort(lastName);
    } else {
      this.members.sort();
    }
  }
}
