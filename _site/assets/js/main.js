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

  drawer(obj) {
    console.log('CONTENT', obj);
    let drawerHTML = [
      `<article class="${obj.key}">`,
      `<h1>${obj.emoji} ${obj.key}</h1>`,
      `<p>${obj.value}</p>`,
      obj.describe ? `<div class="describe">` : '',
      obj.describe ? `<p>${obj.describe.join('</p><p>')}</p>` : '',
      obj.describe ? `</div>` : '',
      `</article>`,
    ].join('');

    // set the display if the obj has an instruction object.
    if (obj.instruction) {
      drawerHTML = [
        `<article class="${obj.key}">`,
        `<h1>${obj.emoji} ${obj.key}</h1>`,
        `<div class="row">`,
        `<div class="describe">`,
        `<p>${obj.value}</p>`,
        obj.describe ? `<p>${obj.describe.join('</p><p>')}</p>` : '',
        `</div>`,
        `<div class="instruction"><h2>Instruction</h2>`,
        `<p>${obj.instruction.join('</p><p>')}</p>`,
        `</div>`,
        `</div>`,
        `</article>`,
      ].join('');
    }

    $('.widget .content').addClass('open');
    $('.widget .content .drawer').html(drawerHTML);
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
        $('.widget .content').removeClass('open');
        $(evt.target).addClass('active');
        this.content(evt.target.dataset.index);
      });

      $('.widget .content .properties').on('click', '[data-property]', evt => {
        const prop = this.current.properties[evt.currentTarget.dataset.property];
        this.drawer(prop);
      });
      $('.widget .content').on('click', '.drawer', evt => {
        $('.widget .content').removeClass('open');
      });
      $('.widget .content .slide').on('click', 'p', evt => {
        this.drawer(this.current);
      });
      //
      // $( "<ul/>", {
      //   "class": "my-new-list",
      //   html: items.join( "" )
      // }).appendTo( "body" );
    });
  }
}
