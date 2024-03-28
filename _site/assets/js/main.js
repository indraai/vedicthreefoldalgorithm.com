"use strict";


class VedicThreefoldAlgorithm {
  constructor() {
    this.title = false;
    this.describe = false;
    this.data = false;
    this.copyright = false;
    this.date = false;
    this.license = false;
    this.tags = false;
    this.version = false;
    this.jsonUrl = 'https://raw.githubusercontent.com/indraai/vedicthreefoldalgorithm.com/main/_data/vedic-threefold-algorithm.json';
  }

  content(idx) {
    const _data = this.data[idx];
    const items = [];

    console.log('DATA IMAGE', _data.image);
    $('.widget .content').attr('style', `--widget-content-bg: url('${_data.image}')`);
    $('.widget .content h1 span').html(`${_data.emoji} ${_data.key}`);
    $('.widget .content p').html(_data.value);

    if (_data.properties) {
      for (const x of _data.properties) {
        const item = [
          `<article class="${x.key}">`,
          `<h2>${x.emoji} ${x.key}</h2>`,
          `<p>${x.value}</p>`,
          `</article>`,
        ].join('');
        items.push(item);
      }
      $('.widget .content .properties').html(items);
    }
  }

  init() {
    $.getJSON(this.jsonUrl, _data => {
      this.title = _data.title;
      this.describe = _data.describe;
      this.data = _data.data;
      this.copyright = _data.copyright;
      this.date = _data.date;
      this.license = _data.license;
      this.tags = _data.tags;
      this.version = _data.version;

      $.each( this.data, (key, val) => {
        $('.widget .panel ul').append( `<li><button data-index="${key}">${val.emoji} ${val.key}</button></li>`);
      });
      $('.widget .panel ul li').on('click', 'button', evt => {
        this.content(evt.target.dataset.index);
      })
      //
      // $( "<ul/>", {
      //   "class": "my-new-list",
      //   html: items.join( "" )
      // }).appendTo( "body" );
    });
  }
}
