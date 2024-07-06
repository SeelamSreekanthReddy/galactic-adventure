using { sap.galactic.spacefarer as my } from '../db/data-model';
service GalacticService {
 entity Spacefarer@(
Capabilities : {
  InsertRestrictions : {
      $Type : 'Capabilities.InsertRestrictionsType',
      Insertable, 
  },
  UpdateRestrictions : {
      $Type : 'Capabilities.UpdateRestrictionsType',
      Updatable,
  },
  DeleteRestrictions : {
      $Type : 'Capabilities.DeleteRestrictionsType',
      Deletable,
  },
},
 ) 
 
 as projection on my.Spacefarer;
 annotate Spacefarer with @odata.draft.enabled;
 entity Departments as projection on my.Departments;
  entity Positions as projection on my.Positions;

}
