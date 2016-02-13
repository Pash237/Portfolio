/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react';
import {googleAnalyticsId} from '../../config';

const trackingCode = 
  `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){` +
  `(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),` +
  `m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)` +
  `})(window,document,'script','//www.google-analytics.com/analytics.js','ga');` +
  `ga('create', 'UA-33138859-9', 'auto');` +
  `ga('send', 'pageview');`;

function GoogleAnalytics() {
	return <script dangerouslySetInnerHTML={{__html: trackingCode}}/>;
}

export default GoogleAnalytics;
