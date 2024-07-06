const cds = require('@sap/cds');
module.exports = cds.service.impl(async function() {
 const { Spacefarer, Departments } = this.entities;
 this.before('CREATE', 'Spacefarer', (req) => {
 if (req.data.stardustCollection < 0) req.reject(400, 'Stardust collection must be a positive value');
 if (req.data.wormholeNavigationSkill < 0 || req.data.wormholeNavigationSkill > 100) req.reject(400, 'Wormhole navigation skill must be between 0 and 100');
 });
 this.on('updatestardustCollection', async (req) => {
 const { ID, amount } = req.data;
 const affectedRows = await cds.tx(req).run(
 UPDATE(Spacefarer)
 .set({ stardustCollection: amount })
 .where({ ID: ID })
 );
 if (affectedRows === 0) req.error(404, 'ID not found');
 });

 /* this.after('CREATE', 'Spacefarer', async (data, req) => {
    const emailService = await cds.connect.to('EmailService');

    const email = {
      to: req.data.email,
      subject: 'Welcome to the Galactic Spacefarers!',
      text: `Dear ${req.data.name},\n\nCongratulations on starting your adventurous journey among the stars!`,
    };

    await emailService.send(req.data.email);
  });  */


});

