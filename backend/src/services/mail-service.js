var sendGrid = require('sendgrid')(global.SEND_GRID_KEY);

exports.sendMail = async (to, subject, body) => {
    sendGrid.send({
        to: to,
        from: 'contato@wtisolutions.com.br',
        subject: subject,
        html : body        
    });
};