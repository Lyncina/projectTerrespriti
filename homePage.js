const newsCards = document.getElementsByClassName('news-cards');
const maxLength = 80;

let news = [{
  link: '',
  title: 'Update I dunno',
  content: 'Ummm... Hmmm.'
},
{
  link: '',
  title: 'Update for something',
  content: 'fhdj kaghd jakghjh euhg hfgh fghdfg dghd dfg ghfk dfgsudry ftyu ftyhfjkd ytff gjhkg fdudryu ftyif gyukfuyfk GAHHHHHHHHHHHHHHHHHHHHHHH'
},
{
  link: '',
  title: 'Update I dunno',
  content: 'Ummm... Hmmm.'
},
{
  link: '',
  title: 'Update I dunno',
  content: 'Ummm... Hmmm.'
},
{
  link: '',
  title: 'Update I dunno',
  content: 'Ummm... Hmmm.'
},
{
  link: '',
  title: 'Launch Date Postponed',
  content: 'ghfk dfgsudry ftyu ftyhfjkd ytff gjhkg fdudryu ftyif gyukfuyfk GAHHHHHHHHHHHHHHHHHHHHHHH'
}];

for (let i = 0; i < 6; i++) {
  newsCards[i].innerHTML = `<a href="${news[i].link}">${news[i].title}</a><p>${news[i].content.slice(0, maxLength)}</p>`;
}