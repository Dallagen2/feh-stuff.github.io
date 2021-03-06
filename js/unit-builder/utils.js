let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

exports.loadFiles = function(urls, loadFont = false) {
  let promises = urls.map(url =>
    new Promise((resolve, reject) => {
      if (url) {
        let img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
      } else {
        resolve('');
      }
    }
  ));
  if (loadFont) {
    promises.push(new FontFace('FehFont', 'url(../font/feh-font.ttf)').load());
  }
  return Promise.all(promises);
};

exports.getEmptySkill = function() {
  return {
    name: '-',
    effect: '',
    stats: {},
    icon: ''
  };
};

exports.arrOptGenerator = function(item, $parent) {
  $(`<div class="dropdown-item">${item}</div>`)
      .data('val', item)
      .appendTo($parent);
};

exports.getDateString = function(date) {
  let hours = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
  let minutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
  return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}, ${minutes}:${hours}`;
};
