(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var table = function() {

    $('.plan-level').click(function(){
        $('.buy-bar').addClass('is-active');
        $('.plan-level').removeClass('is-active');
        if ($(this).hasClass('plan-level-1')) {
            $('.plan-level-1').addClass('is-active');
            var title = $('.plan-data.plan-level-1').data("title");
            var link = $('.plan-data.plan-level-1').data("link");
            $('.buy-bar--inner strong').text(title);   
            $('.buy-bar--inner a').prop("href", link)     
        }
        if ($(this).hasClass('plan-level-2')) {
            $('.plan-level-2').addClass('is-active');
            var title = $('.plan-data.plan-level-2').data("title");
            var link = $('.plan-data.plan-level-2').data("link");
            $('.buy-bar--inner strong').text(title);  
            $('.buy-bar--inner a').prop("href", link)                      
        }
        if ($(this).hasClass('plan-level-3')) {
            $('.plan-level-3').addClass('is-active');
            var title = $('.plan-data.plan-level-3').data("title");
            var link = $('.plan-data.plan-level-3').data("link");
            $('.buy-bar--inner strong').text(title); 
            $('.buy-bar--inner a').prop("href", link)
        }
        if ($(this).hasClass('plan-level-4')) {
            $('.plan-level-4').addClass('is-active');  
            var title = $('.plan-data.plan-level-4').data("title");
            var link = $('.plan-data.plan-level-4').data("link");        
            $('.buy-bar--inner strong').text(title);  
            $('.buy-bar--inner a').prop("href", link)
                    
        }
        if ($(this).hasClass('plan-level-5')) {
            $('.plan-level-5').addClass('is-active');    
            var title = $('.plan-data.plan-level-5').data("title");
            var link = $('.plan-data.plan-level-5').data("link");
            $('.buy-bar--inner strong').text(title); 
            $('.buy-bar--inner a').prop("href", link)    
        }
    });

    $('.buy-bar--close').click(function(){
        $('.buy-bar').removeClass('is-active');
        $('.plan-level').removeClass('is-active');    
    });

};

module.exports = table;

},{}],2:[function(require,module,exports){
// var jquery = require('jquery');
// var heroSlider = require('../../components/heroSlider/_heroSlider');
// var header = require('../../components/header/_header');
var table = require('./_table');
//
//
//
//
// heroSlider();
// header();
table();
console.log('test')
},{"./_table":1}]},{},[2]);
