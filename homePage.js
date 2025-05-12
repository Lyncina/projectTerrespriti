const newsCards = document.getElementsByClassName('news-cards');

let news = [{
  link: '',
  title: 'Update I dunno',
  content: 'Ummm...'
},
{
  link: '',
  title: 'Update for something',
  content: 'I have no idea'
}];

for (let i = 0; i < 6; i++) {
  newsCards[i].innerHTML = `<a href="${news[i].link}">${news[i].title}</a><p>${news[i].content}</p>`;
}