run: async(client, message, args) => {

    let embed_1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
    .setDescription(`**Olá ${message.author}, selecione o tipo de comandante abaixo:**`);

    let painel = new MessageActionRow().addComponents( new MessageSelectMenu()
    .setCustomId('menu')
    .setPlaceholder/* ('Veja meus comandos.') */ // Mensagem estampada
    .addOptions([
           {
                label: 'Painel inicial',
                description: 'Apenas o painel inicial da mensagem',
                emoji: '📓',
                value: 'painel_inicial',
           },
           {
            label: 'Carlos Martel',
            description: 'Veja meus comandos de utilidade',
            emoji: '1️⃣',
            value: 'carlosMartel',
        },
        ])

    );

    message.reply({ content: `${message.author}`, embeds: [embed_1], components: [painel] }).then(msg => {

        const filtro = (interaction) => 
          interaction.isSelectMenu()
    
        const coletor = msg.createMessageComponentCollector({
          filtro
        });
    
        coletor.on('collect', async (collected) => {

          let valor = collected.values[0]
          collected.deferUpdate()

    if (valor === 'painel_inicial') {

         msg.edit({ content: `${message.author}`, embeds: [embed_1], components: [painel] });

    };
    
    if (valor === 'utilidade') {

        let embed_2 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Olá ${message.author}, veja meus comandos de \`utilidade\` abaixo:\n\`\`\`Escreva seus comandos aqui\`\`\`**`);

        msg.edit({ content: `${message.author}`, embeds: [embed_2], components: [painel] });

    };
  })
})
}
