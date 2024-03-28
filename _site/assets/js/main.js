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
    console.log('EVENT CLICK', this.data[idx]);
    $('.widget .content h1').html(`${this.data[idx].emoji} ${this.data[idx].key}`);
    $('.widget .content p').html(this.data[idx].value);
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
        console.log('data val', key, val);
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
