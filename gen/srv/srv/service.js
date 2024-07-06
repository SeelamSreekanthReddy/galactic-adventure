const cds = require('@sap/cds');

module.exports = (srv) => {
  // @Before event for Spacefarers
  srv.before('CREATE', 'Spacefarers', (req) => {
    const { stardustCollection, wormholeNavigationSkill } = req.data;

    // Validate and enhance stardust collection and wormhole navigation skill
    if (stardustCollection < 0) {
      req.reject(400, 'Stardust collection must be a positive value');
    }
    if (wormholeNavigationSkill < 0 || wormholeNavigationSkill > 100) {
      req.reject(400, 'Wormhole navigation skill must be between 0 and 100');
    }

    // Enhance attributes (example: bonus for new spacefarers)
    req.data.stardustCollection += 100;
    req.data.wormholeNavigationSkill += 10;
  });

  // @After event for Spacefarers
  /* srv.after('CREATE', 'Spacefarers', async (data, req) => {
    const emailService = await cds.connect.to('EmailService');

    const email = {
      to: data.email,
      subject: 'Welcome to the Galactic Spacefarers!',
      text: `Dear ${data.name},\n\nCongratulations on starting your adventurous journey among the stars!`,
    };

    await emailService.send(email);
  }); */
};
