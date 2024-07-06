namespace sap.galactic.spacefarer;

entity Spacefarer {
  key ID                : Integer;
  name                  : String;
  email                 : String;  
  stardustCollection    : Integer;
  wormholeNavigationSkill : Integer;
  originPlanet          : String;
  spacesuitColor        : String;

  department            : Association to Departments;
  position              : Association to Positions;
}

entity Departments {
  key ID   : Integer;
  name     : String;
  members  : Composition of many Spacefarer on members.department = $self;
}

entity Positions {
  key ID   : String;
  title    : String;
  members  : Composition of many Spacefarer on members.position = $self;
}
