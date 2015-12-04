describe("Team Manager", function() {
  describe("#init", function() {
    it("should initialize with empty array of members", function() {
      var team = new TeamManager();

      expect(team.members).toBeAn("array");
      expect(team.members.length).toBe(0);
    });
  });

  describe("#add", function() {
    it("should add a team memeber", function() {
      var team = new TeamManager();

      team.add("Josh Minnich");

      expect(team.members[0]).toBe("Josh Minnich");
    });
  });

  describe("#remove", function() {
    it("should remove a team member", function() {
      var team = new TeamManager();

      team.add("Josh Minnich");
      team.add("Walker Hamilton");

      team.remove("Josh Minnich");

      expect(team.members.length).toBe(1);
    });
  });

  describe("#sort", function() {
    it("should sort team members by name", function() {
      var team = new TeamManager();

      team.add("Keegan Goudiss");
      team.add("Josh Minnich");
      team.add("Scott Goodstein");

      team.sort();

      expect(team.members[0]).toBe("Josh Minnich");
      expect(team.members[1]).toBe("Keegan Goudiss");
      expect(team.members[2]).toBe("Scott Goodstein");
    });

    it("should sort by last name when specified", function() {
      var team = new TeamManager();

      team.add("Keegan Goudiss");
      team.add("Josh Minnich");
      team.add("Scott Goodstein");

      team.sort("lastName");

      expect(team.members[0]).toBe("Scott Goodstein");
      expect(team.members[1]).toBe("Keegan Goudiss");
      expect(team.members[2]).toBe("Josh Minnich");
    });
  });
});
