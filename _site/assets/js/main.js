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
    this.current = false;
    this.jsonUrl = 'https://raw.githubusercontent.com/indraai/vedicthreefoldalgorithm.com/main/_data/vedic-threefold-algorithm.json';
  }

  content(idx) {
    this.current = this.data[idx];
    const items = [];

    $('.widget .content').attr('style', `--widget-content-bg: url('${this.current.image}')`);
    $('.widget .content .slide h1 span').html(`${this.current.emoji} ${this.current.key}`);
    $('.widget .content .slide p').html(this.current.value);

    if (this.current.properties) {
      this.current.properties.forEach((val,x) => {
        const item = [
          `<article class="${val.key}" data-property="${x}">`,
          `<h2>${val.emoji} ${val.key}</h2>`,
          `<p>${val.value}</p>`,
          `</article>`,
        ].join('');
        items.push(item);
      });
      if (items.length) {
        $('.widget').addClass('props');
        $('.widget .content .properties').html(items);
      }
      else {
        $('.widget').removeClass('props');
      }
    };
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
        $('.widget .panel ul li button').removeClass('active');
        $(evt.target).addClass('active');
        this.content(evt.target.dataset.index);
      });
      $('.widget .content .properties').on('click', '[data-property]', evt => {
        console.log('data property', this.current.properties[evt.currentTarget.dataset.property]);
        $('.widget .content').addClass('open');
      });
      //
      // $( "<ul/>", {
      //   "class": "my-new-list",
      //   html: items.join( "" )
      // }).appendTo( "body" );
    });
  }
}
