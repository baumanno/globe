Ember.TEMPLATES["_flag-list"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("<h5 class=\"has-tip\"\ndata-description=\"Flags that the directory authorities assigned to this relay.\"\ntitle=\"Flags\">Flags</h5>");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("<div class=\"pure-u-1\"><p class=\"c-red no-width-limit\"><i class=\"fa-clock-o fa\"></i> These flags aren't up to date anymore</p></div>");
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("<div class=\"pure-u-1-3\"><p>");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "flaggifyLong", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("</p></div>");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("<div class=\"pure-u-1\"><p>none</p></div>");
  }

  data.buffer.push("<div class=\"text-content\"><div class=\"property\">");
  stack1 = helpers['if'].call(depth0, "inLatestConsensus", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(1, program1, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<div class=\"pure-g-r flags-list\">");
  stack1 = helpers.unless.call(depth0, "inLatestConsensus", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  stack1 = helpers.each.call(depth0, "flags", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div></div></div>");
  return buffer;
  
});

Ember.TEMPLATES["_navigation"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-signal\"></i><span>Top 10 relays</span>");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-info-circle\"></i><span>Help</span>");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-code\"></i><span>Code</span>");
  }

  data.buffer.push("<div class=\"pure-g-r navigation\"><div class=\"pure-u-1-3\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "top10", options) : helperMissing.call(depth0, "link-to", "top10", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div><div class=\"pure-u-1-3\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "help", options) : helperMissing.call(depth0, "link-to", "help", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div><div class=\"pure-u-1-3\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "code", options) : helperMissing.call(depth0, "link-to", "code", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div></div>");
  return buffer;
  
});

Ember.TEMPLATES["_searchBar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"center-wrapper\"><div class=\"searchbar sticky\"><div class=\"pure-g\"><div class=\"pure-u-5-6\"><div class=\"main-search-wrapper\">");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "GLOBE.TextField", {hash:{
    'valueBinding': ("value"),
    'placeholder': ("keyword"),
    'action': ("search"),
    'id': ("main-search"),
    'tabindex': ("1"),
    'classBinding': ("value.length:hover")
  },hashTypes:{'valueBinding': "STRING",'placeholder': "STRING",'action': "STRING",'id': "STRING",'tabindex': "STRING",'classBinding': "STRING"},hashContexts:{'valueBinding': depth0,'placeholder': depth0,'action': depth0,'id': depth0,'tabindex': depth0,'classBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div></div><div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pure-u-1-12 :search-control searchRecommended:hover")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("><div title=\"start searching\" class=\"fa fa-search\" tabindex=\"2\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "search", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("></div></div><div class=\"pure-u-1-12 search-control\"><div title=\"advanced search\" class=\"fa fa-gear toggle-advanced-search\" tabindex=\"3\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleAdvancedSearch", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("></div></div></div></div></div><div class=\"advanced-search-back\"><div class=\"center-wrapper\"><form ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":advanced-search-form :search-filters advancedSearch:search-filters-enabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("><div class=\"searchbar-advanced pure-g-r\"><div class=\"pure-u-1-6 label\">Filters:\n</div><div class=\"pure-u-1-6\">");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'name': ("type"),
    'classBinding': ("advancedSearchOptions.type:has-value"),
    'prompt': ("Type"),
    'valueBinding': ("advancedSearchOptions.type"),
    'contentBinding': ("GLOBE.static.searchParams.type")
  },hashTypes:{'name': "STRING",'classBinding': "STRING",'prompt': "STRING",'valueBinding': "STRING",'contentBinding': "STRING"},hashContexts:{'name': depth0,'classBinding': depth0,'prompt': depth0,'valueBinding': depth0,'contentBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div><div class=\"pure-u-1-6\">");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'name': ("running"),
    'classBinding': ("advancedSearchOptions.running:has-value"),
    'prompt': ("Running"),
    'valueBinding': ("advancedSearchOptions.running"),
    'contentBinding': ("GLOBE.static.searchParams.running")
  },hashTypes:{'name': "STRING",'classBinding': "STRING",'prompt': "STRING",'valueBinding': "STRING",'contentBinding': "STRING"},hashContexts:{'name': depth0,'classBinding': depth0,'prompt': depth0,'valueBinding': depth0,'contentBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div><div class=\"pure-u-1-6\">");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'name': ("country"),
    'classBinding': ("advancedSearchOptions.country:has-value"),
    'prompt': ("Country"),
    'valueBinding': ("advancedSearchOptions.country"),
    'optionValuePath': ("content.key"),
    'optionLabelPath': ("content.value"),
    'contentBinding': ("GLOBE.static.countriesArray")
  },hashTypes:{'name': "STRING",'classBinding': "STRING",'prompt': "STRING",'valueBinding': "STRING",'optionValuePath': "STRING",'optionLabelPath': "STRING",'contentBinding': "STRING"},hashContexts:{'name': depth0,'classBinding': depth0,'prompt': depth0,'valueBinding': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'contentBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div><div class=\"pure-u-1-6\">");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("as"),
    'type': ("text"),
    'placeholder': ("AS"),
    'classBinding': ("advancedSearchOptions.as:has-value"),
    'valueBinding': ("advancedSearchOptions.as")
  },hashTypes:{'name': "STRING",'type': "STRING",'placeholder': "STRING",'classBinding': "STRING",'valueBinding': "STRING"},hashContexts:{'name': depth0,'type': depth0,'placeholder': depth0,'classBinding': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</div><div class=\"pure-u-1-6\">");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'name': ("flag"),
    'classBinding': ("advancedSearchOptions.flag:has-value"),
    'prompt': ("Flag"),
    'valueBinding': ("advancedSearchOptions.flag"),
    'optionValuePath': ("content.key"),
    'optionLabelPath': ("content.key"),
    'contentBinding': ("GLOBE.static.iconsArray")
  },hashTypes:{'name': "STRING",'classBinding': "STRING",'prompt': "STRING",'valueBinding': "STRING",'optionValuePath': "STRING",'optionLabelPath': "STRING",'contentBinding': "STRING"},hashContexts:{'name': depth0,'classBinding': depth0,'prompt': depth0,'valueBinding': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'contentBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div></div></form></div></div>");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '';
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("<div class=\"loading-overlay\"></div>");
  return buffer;
  }

  data.buffer.push("<div class=\"head-bar\"><div class=\"main-head\"><div class=\"center-wrapper\"><div class=\"pure-g-r\"><div class=\"pure-u-1-5\"><div class=\"logo-wrapper\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("logo"),
    'title': ("back home")
  },hashTypes:{'class': "STRING",'title': "STRING"},hashContexts:{'class': depth0,'title': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div></div><div class=\"pure-u-4-5\"><div class=\"navigation-wrapper\">");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "navigation", options) : helperMissing.call(depth0, "partial", "navigation", options))));
  data.buffer.push("</div></div></div></div></div>");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "searchBar", options) : helperMissing.call(depth0, "partial", "searchBar", options))));
  data.buffer.push("</div><div class=\"content\">");
  stack1 = helpers['if'].call(depth0, "GLOBE.loading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<div class=\"outlet\"><div class=\"pure-g\"><div class=\"pure-u-1\">");
  data.buffer.push(escapeExpression((helper = helpers['alert-box'] || (depth0 && depth0['alert-box']),options={hash:{
    'contentBinding': ("GLOBE.alert.search")
  },hashTypes:{'contentBinding': "STRING"},hashContexts:{'contentBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "alert-box", options))));
  data.buffer.push("</div></div>");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<div class=\"pure-g footer\"><div class=\"pure-u-1\"><div class=\"text-content\"><p class=\"no-width-limit\">Want to <a href=\"https://trac.torproject.org/projects/tor/newticket?component=Globe\">report a bug</a>, contribute or view the source? Check out the repository <a href=\"https://github.com/makepanic/globe\">on <i class=\"fa fa-github-alt\"></i> github</a>.\n\"Tor\" and the \"Onion Logo\" are registered trademarks of The Tor Project, Inc.\n</p></div></div></div></div></div>");
  return buffer;
  
});

Ember.TEMPLATES["bridgeDetail"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("<div class=\"text-content\"><div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pure-g-r :fast-look running:true:false")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("><div class=\"pure-u-1-3\"><div class=\"text-content\"><h4 class=\"has-tip\"\ndata-description=\"This is the nickname that the Tor bridge operator chose.\"\ntitle=\"Nickname\">nickname\n</h4><p>");
  stack1 = helpers._triageMustache.call(depth0, "nickname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p></div></div><div class=\"pure-u-1-3\"><div class=\"text-content\">");
  stack1 = helpers['if'].call(depth0, "running", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div></div><div class=\"pure-u-1-3\"><div class=\"text-content\"><h4 class=\"has-tip\"\ndata-description=\"Whether this bridge is listed in the current Tor directory or not.\"\ntitle=\"Running\">running</h4><p ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("running:true:false")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "running", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p></div></div></div></div><div class=\"page-properties\"><div class=\"text-content\"><div class=\"property\"><h5 class=\"has-tip\"\ndata-description=\"20-byte unique identifier of the bridge.\"\ntitle=\"Fingerprint\">Fingerprint</h5><p class=\"align-center no-width-limit\">");
  stack1 = helpers._triageMustache.call(depth0, "hashed_fingerprint", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p></div></div>");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "flag-list", options) : helperMissing.call(depth0, "partial", "flag-list", options))));
  data.buffer.push("<div class=\"pure-g-r\"><div class=\"pure-u-1-2\"><!-- first col --><div class=\"text-content\"><div class=\"property\"><h5 class=\"has-tip\"\ndata-description=\"Addresses and ports where the bridge listens for incoming connections from clients and other bridges.\"\ntitle=\"Onion-routing addresses\">OR Addresses\n</h5><ul class=\"property-content item-list\">");
  stack1 = helpers.each.call(depth0, "or_addresses", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</ul></div></div><div class=\"text-content\"><div class=\"property\"><h5 class=\"has-tip\"\ndata-description=\"Bandwidth that the bridge is willing and able to provide in bytes per second.\"\ntitle=\"Advertised bandwidth\">Advertised Bandwidth\n</h5><p class=\"property-content\">");
  data.buffer.push(escapeExpression((helper = helpers.bandwidth || (depth0 && depth0.bandwidth),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "advertised_bandwidth", options) : helperMissing.call(depth0, "bandwidth", "advertised_bandwidth", options))));
  data.buffer.push("</p></div></div></div><!-- second col --><div class=\"pure-u-1-2\"><div class=\"text-content\"><div class=\"property\"><h5 class=\"has-tip\"\ndata-description=\"Date and time when the bridge was last (re-)started.\"\ntitle=\"Last restarted\">Last restarted\n</h5><p class=\"property-content\">");
  stack1 = helpers._triageMustache.call(depth0, "last_restarted", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p></div><div class=\"property\"><h5 class=\"has-tip\"\ndata-description=\"What OS and Tor version the bridge is using\"\ntitle=\"Platform\">Platform\n</h5><p class=\"property-content\">");
  stack1 = helpers._triageMustache.call(depth0, "platform", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p></div><div class=\"property\"><h5 class=\"has-tip\"\ndata-description=\"Information of the pool that BridgeDB assigned this bridge to.\"\ntitle=\"Pool assignment\">Pool Assignment\n</h5><p class=\"property-content\">");
  stack1 = helpers._triageMustache.call(depth0, "pool_assignment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p></div></div></div></div><div class=\"tabs\"><div class=\"tab-title\">Periods\n</div>");
  stack1 = helpers.each.call(depth0, "periods", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div><div class=\"text-content\">");
  data.buffer.push(escapeExpression((helper = helpers['bandwidth-stats'] || (depth0 && depth0['bandwidth-stats']),options={hash:{
    'dateWindow': ("dateWindow"),
    'period': ("selectedPeriod"),
    'data': ("controller.bandwidthData"),
    'timePeriods': ("controller.bandwidthPeriods")
  },hashTypes:{'dateWindow': "ID",'period': "ID",'data': "ID",'timePeriods': "ID"},hashContexts:{'dateWindow': depth0,'period': depth0,'data': depth0,'timePeriods': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bandwidth-stats", options))));
  data.buffer.push("</div><div class=\"text-content\">");
  data.buffer.push(escapeExpression((helper = helpers['uptime-stats'] || (depth0 && depth0['uptime-stats']),options={hash:{
    'dateWindow': ("dateWindow"),
    'period': ("selectedPeriod"),
    'data': ("controller.uptimeData"),
    'timePeriods': ("controller.uptimePeriods")
  },hashTypes:{'dateWindow': "ID",'period': "ID",'data': "ID",'timePeriods': "ID"},hashContexts:{'dateWindow': depth0,'period': depth0,'data': depth0,'timePeriods': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "uptime-stats", options))));
  data.buffer.push("</div><div class=\"text-content\">");
  data.buffer.push(escapeExpression((helper = helpers['clients-stats'] || (depth0 && depth0['clients-stats']),options={hash:{
    'dateWindow': ("dateWindow"),
    'period': ("selectedPeriod"),
    'data': ("controller.clientsData"),
    'timePeriods': ("controller.clientsPeriods")
  },hashTypes:{'dateWindow': "ID",'period': "ID",'data': "ID",'timePeriods': "ID"},hashContexts:{'dateWindow': depth0,'period': depth0,'data': depth0,'timePeriods': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "clients-stats", options))));
  data.buffer.push("</div></div>");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("<div><h4 class=\"has-tip\"\ndata-description=\"The time since this bridge is online.\"\ntitle=\"Uptime\">uptime</h4><p>");
  data.buffer.push(escapeExpression((helper = helpers.uptimeFull || (depth0 && depth0.uptimeFull),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "last_restarted", options) : helperMissing.call(depth0, "uptimeFull", "last_restarted", options))));
  data.buffer.push("</p></div>");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("<div><h4 class=\"has-tip\"\ndata-description=\"The time since this bridge was last seen online.\"\ntitle=\"Downtime\">downtime</h4><p>");
  data.buffer.push(escapeExpression((helper = helpers.uptimeFull || (depth0 && depth0.uptimeFull),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "last_seen", options) : helperMissing.call(depth0, "uptimeFull", "last_seen", options))));
  data.buffer.push("</p></div>");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("<li>");
  data.buffer.push(escapeExpression((helper = helpers.anonIpAdress || (depth0 && depth0.anonIpAdress),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "", options) : helperMissing.call(depth0, "anonIpAdress", "", options))));
  data.buffer.push("</li>");
  return buffer;
  }

function program8(depth0,data) {
  
  
  data.buffer.push("<li>none</li>");
  }

function program10(depth0,data) {
  
  var helper, options;
  data.buffer.push(escapeExpression((helper = helpers['tab-item'] || (depth0 && depth0['tab-item']),options={hash:{
    'active': ("active"),
    'title': ("title"),
    'key': ("key"),
    'tabActivated': ("tabActivated")
  },hashTypes:{'active': "ID",'title': "ID",'key': "ID",'tabActivated': "STRING"},hashContexts:{'active': depth0,'title': depth0,'key': depth0,'tabActivated': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "tab-item", options))));
  }

function program12(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("<div class=\"text-content\">");
  stack1 = (helper = helpers['loading-indicator'] || (depth0 && depth0['loading-indicator']),options={hash:{
    'message': ("Loading bridge details...")
  },hashTypes:{'message': "STRING"},hashContexts:{'message': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "loading-indicator", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>");
  return buffer;
  }
function program13(depth0,data) {
  
  
  data.buffer.push("<p class=\"align-center no-width-limit\">No detail found <i class=\"fa fa-meh-o\"></i></p>");
  }

  data.buffer.push("<div class=\"pure-g\"><div class=\"pure-u-1\">");
  stack1 = helpers['if'].call(depth0, "controller.showContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(12, program12, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div></div>");
  return buffer;
  
});

Ember.TEMPLATES["code"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"pure-g\"><div class=\"pure-u-1\"><div class=\"text-content\"><h2 class=\"styled\">Code - Building Globe</h2><div class=\"pure-g-r\"><div class=\"pure-u-1-2\"><div class=\"text-content\"><h3>Getting the code</h3><p>Globe is an open source application licensed under <a href=\"http://opensource.org/licenses/MIT\">MIT License</a>. All of its code is available on <a href=\"https://github.com/makepanic/globe\"><i class=\"fa fa-github-alt\"></i> github</a>.</p><p>You can clone the project via:</p><ul><li><strong>git</strong> <code>https://github.com/makepanic/globe.git</code></li><li><strong>git</strong> <code>git@github.com:makepanic/globe.git</code></li><li><strong>svn</strong> <code>https://github.com/makepanic/globe</code></li></ul><h3>Used Libraries</h3><table class=\"width-full pure-table\"><thead><tr><th>Project</th><th>License</th></tr></thead><tbody><tr><td><a href=\"http://emberjs.com/\">Ember.js</a></td><td><a href=\"http://opensource.org/licenses/MIT\">MIT License</a></td></tr><tr><td><a href=\"http://purecss.io/\">Pure</a></td><td><a href=\"https://github.com/yui/pure/blob/master/LICENSE.md\">Yahoo! Inc. BSD license</a></td></tr><tr><td><a href=\"http://purecss.io/\">Font Awesome - Font</a></td><td><a href=\"http://scripts.sil.org/OFL\">SIL OFL 1.1</a></td></tr><tr><td><a href=\"http://purecss.io/\">Font Awesome - SASS files</a></td><td><a href=\"http://opensource.org/licenses/mit-license.html\">MIT License</a></td></tr><tr><td><a href=\"http://handlebarsjs.com/\">Handlebars</a></td><td><a href=\"http://opensource.org/licenses/MIT\">MIT License</a></td></tr><tr><td><a href=\"http://dygraphs.com/\">dygraphs</a></td><td><a href=\"http://opensource.org/licenses/MIT\">MIT License</a></td></tr><tr><td><a href=\"http://momentjs.com/\">moment</a></td><td><a href=\"http://opensource.org/licenses/MIT\">MIT License</a></td></tr><tr><td><a href=\"http://jquery.com/\">jQuery</a></td><td><a href=\"http://opensource.org/licenses/MIT\">MIT License</a></td></tr><tr><td><a href=\"http://qtip2.com/\">qTip2</a></td><td><a href=\"http://opensource.org/licenses/MIT\">MIT License</a></td></tr><tr><td><a href=\"https://datatables.net/\">DataTables</a></td><td><a href=\"http://opensource.org/licenses/MIT\">MIT license</a> <a href=\"http://datatables.net/license_mit\">@</a></td></tr><tr><td><a href=\"https://github.com/chrissrogers/jquery-deparam/blob/master/jquery-deparam.js\">jquery deparam</a></td><td>none mentioned</td></tr><tr><td><a href=\"http://caligatio.github.io/jsSHA/\">jsSHA</a></td><td><a href=\"https://github.com/Caligatio/jsSHA/blob/release-1.42/LICENSE\">BSD license</a></td></tr></tbody></table></div></div><div class=\"pure-u-1-2\"><div class=\"text-content\"><h3>Building globe</h3><p>To provide a reproducible development environment we created a <a href=\"https://github.com/makepanic/globe/blob/master/Vagrantfile\">Vagrantfile</a>, which uses\n<a href=\"http://www.vagrantup.com/\">Vagrant</a> to bootstrap an ubuntu 12.04 virtual machine with everything necessary for developing and building globe.</p><p>To start the virtual machine run <i>vagrant up</i> and wait for it to finish. Once it is ready access the virtual machine via <i>vagrant ssh</i>.\nThe globe source code is located in the <i>/vagrant/</i> directory.</p><p>Building globe requires <a href=\"http://nodejs.org/\">nodejs</a> (tested using nodejs v0.10.x).</p><p>Globe uses <a href=\"http://gruntjs.com/\">grunt</a> tasks to minify, compress and modify the source code. Tests are executed with <a href=\"http://karma-runner.github.io/\">Karma</a>.</p><p>The following grunt tasks are available for building globe:</p><h4><code>grunt dev</code></h4><ul><li>uses non minified JavaScript and CSS files</li><li>watches code for changes and reruns the task again</li><li>concats app files</li></ul><h4><code>grunt standalone</code></h4><ul><li>uses minified JavaScript and CSS files</li><li>concats app files and minifies everything</li></ul><h4><code>grunt standalone-archive</code></h4><ul><li>same as <strong>grunt standalone</strong></li><li>creates an archive with all the required ressources after preparing everything</li></ul><h4><code>grunt ci</code></h4><ul><li>same as <strong>grunt standalone</strong></li><li>runs karma tests after preparing everything</li></ul><h4><code>grunt</code></h4><ul><li>same as <strong>grunt dev</strong>, but doesn't watch for changes</li></ul></div></div></div></div></div></div>");
  
});

Ember.TEMPLATES["components/alert-box"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "msg", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["components/bandwidth-stats"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"pure-g-r\">\n    <div class=\"pure-u-1-3\">\n        <h3>Bandwidth</h3>\n        <p>mean written bytes</p>\n        <strong>\n            <span class=\"d3-col block-0\"></span>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.bandwidth || (depth0 && depth0.bandwidth),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "readHistoryAvg", options) : helperMissing.call(depth0, "bandwidth", "readHistoryAvg", options))));
  data.buffer.push("\n        </strong>\n        <p>mean read bytes</p>\n        <strong>\n            <span class=\"d3-col block-1\"></span>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.bandwidth || (depth0 && depth0.bandwidth),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "writeHistoryAvg", options) : helperMissing.call(depth0, "bandwidth", "writeHistoryAvg", options))));
  data.buffer.push("\n        </strong>\n    </div>\n    <div class=\"pure-u-2-3\">\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "GLOBE.RelayBandwidthView", {hash:{
    'dateWindow': ("dateWindow"),
    'period': ("period"),
    'data': ("data"),
    'timePeriods': ("timePeriods")
  },hashTypes:{'dateWindow': "ID",'period': "ID",'data': "ID",'timePeriods': "ID"},hashContexts:{'dateWindow': depth0,'period': depth0,'data': depth0,'timePeriods': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/clients-stats"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"pure-g-r\">\n    <div class=\"pure-u-1-3\">\n        <h3>Clients</h3>\n        <p>mean average connected clients</p>\n        <strong>\n            <span class=\"d3-col block-0\"></span>\n            ");
  stack1 = helpers._triageMustache.call(depth0, "averageClientsAvg", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </strong>\n    </div>\n    <div class=\"pure-u-2-3\">\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "GLOBE.BridgeClientsView", {hash:{
    'dateWindow': ("dateWindow"),
    'period': ("period"),
    'data': ("data"),
    'timePeriods': ("timePeriods")
  },hashTypes:{'dateWindow': "ID",'period': "ID",'data': "ID",'timePeriods': "ID"},hashContexts:{'dateWindow': depth0,'period': depth0,'data': depth0,'timePeriods': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/loading-indicator"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        \n            ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"pure-g-r\">\n    <div class=\"pure-u-1\">\n        ");
  stack1 = helpers['if'].call(depth0, "isDataLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/tab-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<p>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>");
  return buffer;
  
});

Ember.TEMPLATES["components/uptime-stats"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"pure-g-r\">\n    <div class=\"pure-u-1-3\">\n        <h3>Uptime</h3>\n        <p>mean uptime</p>\n        <strong>\n            <span class=\"d3-col block-0\"></span>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.percent || (depth0 && depth0.percent),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "uptimeAvg", options) : helperMissing.call(depth0, "percent", "uptimeAvg", options))));
  data.buffer.push("\n        </strong>\n    </div>\n    <div class=\"pure-u-2-3\">\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "GLOBE.RelayUptimeView", {hash:{
    'dateWindow': ("dateWindow"),
    'period': ("period"),
    'data': ("data"),
    'timePeriods': ("timePeriods")
  },hashTypes:{'dateWindow': "ID",'period': "ID",'data': "ID",'timePeriods': "ID"},hashContexts:{'dateWindow': depth0,'period': depth0,'data': depth0,'timePeriods': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/weight-stats"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"pure-g-r\">\n    <div class=\"pure-u-1-3\">\n        <h3>Weights</h3>\n        <p>mean advertised bandwidth fraction</p>\n        <strong>\n            <span class=\"d3-col block-0\"></span>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.percent || (depth0 && depth0.percent),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","INTEGER"],data:data},helper ? helper.call(depth0, "advertisedBandwidthAvg", 4, options) : helperMissing.call(depth0, "percent", "advertisedBandwidthAvg", 4, options))));
  data.buffer.push("\n        </strong>\n        <p>mean consensus weight fraction</p>\n        <strong>\n            <span class=\"d3-col block-1\"></span>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.percent || (depth0 && depth0.percent),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","INTEGER"],data:data},helper ? helper.call(depth0, "consensusWeightFractionAvg", 4, options) : helperMissing.call(depth0, "percent", "consensusWeightFractionAvg", 4, options))));
  data.buffer.push("\n        </strong>\n        <p>mean guard probability fraction</p>\n        <strong>\n            <span class=\"d3-col block-2\"></span>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.percent || (depth0 && depth0.percent),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","INTEGER"],data:data},helper ? helper.call(depth0, "guardProbabilityAvg", 4, options) : helperMissing.call(depth0, "percent", "guardProbabilityAvg", 4, options))));
  data.buffer.push("\n        </strong>\n        <p>mean exit probability fraction</p>\n        <strong>\n            <span class=\"d3-col block-3\"></span>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.percent || (depth0 && depth0.percent),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","INTEGER"],data:data},helper ? helper.call(depth0, "exitProbabilityAvg", 4, options) : helperMissing.call(depth0, "percent", "exitProbabilityAvg", 4, options))));
  data.buffer.push("\n        </strong>\n    </div>\n    <div class=\"pure-u-2-3\">\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "GLOBE.RelayWeightView", {hash:{
    'dateWindow': ("dateWindow"),
    'period': ("period"),
    'data': ("data"),
    'timePeriods': ("timePeriods")
  },hashTypes:{'dateWindow': "ID",'period': "ID",'data': "ID",'timePeriods': "ID"},hashContexts:{'dateWindow': depth0,'period': depth0,'data': depth0,'timePeriods': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["graphItem"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("<span title=\"save this graph as image\" class=\"save-as-png pure-button\"><i class=\"fa fa-download\"></i>download graph\n</span>");
  }

  data.buffer.push("<div class=\"property\"><h5 class=\"align-right\">");
  stack1 = helpers['if'].call(depth0, "view.hasGraph", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h5><div class=\"graph-canvas\"></div></div>");
  return buffer;
  
});

Ember.TEMPLATES["help"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"pure-g help\"><div class=\"pure-u-1\"><div class=\"text-content\"><h2 class=\"styled\">Help (WIP)</h2></div><div class=\"text-content\"><h3>Flags</h3><!-- via https://gitweb.torproject.org/torspec.git/blob/HEAD:/dir-spec.txt#l1522 --><ul><li><strong>Authority</strong> if the router is a directory authority</li><li><strong>BadExit</strong> if the router is believed to be useless as an exit node (because its ISP censors it, because it is behind a restrictive proxy, or for some similar reason)</li><li><strong>BadDirectory</strong> if the router is believed to be useless as a directory cache (because its directory port isn't working, its bandwidth is always throttled, or for some similar reason)</li><li><strong>Exit</strong> if the router is more useful for building general-purpose exit circuits than for relay circuits. The path building algorithm uses this flag; see path-spec.txt</li><li><strong>Fast</strong> if the router is suitable for high-bandwidth circuits</li><li><strong>Guard</strong> if the router is suitable for use as an entry guard</li><li><strong>HSDir</strong> if the router is considered a v2 hidden service directory</li><li><strong>Named</strong> if the router's identity-nickname mapping is canonical and this authority binds names</li><li><strong>Stable</strong> if the router is suitable for long-lived circuits</li><li><strong>Running</strong> if the router is currently usable</li><li><strong>Unnamed</strong> if another router has bound the name used by this router, and this authority binds names</li><li><strong>Valid</strong> if the router has been 'validated'</li><li><strong>V2Dir</strong> if the router implements the v2 directory protocol</li></ul></div></div></div>");
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"pure-g\"><div class=\"pure-u-1\"><div class=\"text-content\"><h2 class=\"styled\">Globe - A Tor relay and bridge explorer</h2><div class=\"pure-g-r\"><div class=\"pure-u-1-2\"><div class=\"text-content\"><h3>What is Globe?</h3><p>Globe is an application that helps you find and explore <a href=\"https://www.torproject.org/\">Tor</a> relays and bridges.\nIt's inspired by <a href=\"https://atlas.torproject.org\">Atlas</a> and uses the <a href=\"https://www.torproject.org/projects/onionoo.html\">Onionoo-API</a> to get the data.\nMore details about the used libraries and information on how to build your own version of Globe are available in the <a href=\"https://github.com/makepanic/globe/blob/master/README.md\">README</a>.\n</p></div></div><div class=\"pure-u-1-2\"><div class=\"text-content\"><h3>Features</h3><ul><li>Search for bridges or relays</li><li>Advanced search with country, running, flags and other filters</li><li>Details for a bridge or relay</li><li>Interactive graphs using dygraphs</li><li>Shareable links for searches or details</li></ul></div></div></div></div></div></div>");
  
});

Ember.TEMPLATES["relayDetail"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("<div class=\"text-content\"><div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":pure-g-r :fast-look running:true:false")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("><div class=\"pure-u-1-3\"><div class=\"text-content\"><h4 class=\"has-tip\"\ndata-description=\"This is the nickname that the Tor relay operator chose.\"\ntitle=\"Nickname\">nickname</h4><p>");
  stack1 = helpers._triageMustache.call(depth0, "nickname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p></div></div><div class=\"pure-u-1-3\"><div class=\"text-content\">");
  stack1 = helpers['if'].call(depth0, "running", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div></div><div class=\"pure-u-1-3\"><div class=\"text-content\"><h4 class=\"has-tip\"\ndata-description=\"Whether this relay is listed in the current Tor directory or not.\"\ntitle=\"Running\">running</h4><p ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("running:true:false")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "running", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p></div></div></div></div><div class=\"page-properties\"><div class=\"text-content\"><div class=\"property\"><h5 class=\"has-tip\"\ndata-description=\"20-byte unique identifier of the relay.\"\ntitle=\"Fingerprint\">Fingerprint</h5><p class=\"align-center no-width-limit\">");
  stack1 = helpers._triageMustache.call(depth0, "fingerprint", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p></div></div>");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "flag-list", options) : helperMissing.call(depth0, "partial", "flag-list", options))));
  data.buffer.push("<div class=\"pure-g-r\"><div class=\"pure-u-1-2\"><div class=\"text-content\"><div class=\"property\"><h5 class=\"has-tip\"\ndata-description=\"Addresses and ports where the relay listens for incoming connections from clients and other relays.\"\ntitle=\"Onion-routing addresses\">OR Addresses</h5><ul class=\"property-content item-list\">");
  stack1 = helpers.each.call(depth0, "or_addresses", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</ul></div><div class=\"property\"><h5 class=\"has-tip\"\ndata-description=\"Port summary of exit connections that the relay is going to accept or reject.\"\ntitle=\"Exit policy summary\">Exit Policy Summary\n");
  stack1 = helpers['if'].call(depth0, "exit_policy_summary.accept", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h5>");
  stack1 = helpers['if'].call(depth0, "exit_policy_summary.accept", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  stack1 = helpers['if'].call(depth0, "exit_policy_summary.reject", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div><div class=\"property\"><h5 class=\"has-tip\"\ndata-description=\"Policy of exit connections that the relay is going to accept or reject.\"\ntitle=\"Exit policy\">Exit Policy</h5><div class=\"property-content\"><ul class=\"item-list\">");
  stack1 = helpers.each.call(depth0, "exit_policy", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</ul></div></div><div class=\"property\"><h5 class=\"has-tip\"\ndata-description=\"Bandwidth that the relay is willing and able to provide in bytes per second.\"\ntitle=\"Advertised bandwidth\">Advertised Bandwidth</h5><p class=\"property-content\">");
  data.buffer.push(escapeExpression((helper = helpers.bandwidth || (depth0 && depth0.bandwidth),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "advertised_bandwidth", options) : helperMissing.call(depth0, "bandwidth", "advertised_bandwidth", options))));
  data.buffer.push("</p></div><div class=\"property\"><h5 class=\"has-tip\"\ndata-description=\"Date and time when the relay was last (re-)started.\"\ntitle=\"Last restarted\">Last Restarted</h5><p class=\"property-content\">");
  stack1 = helpers._triageMustache.call(depth0, "last_restarted", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p></div></div></div><div class=\"pure-u-1-2\"><div class=\"text-content\"><div class=\"property\"><h5 class=\"has-tip\"\ndata-description=\"These are the contact details of the Tor relay operator\"\ntitle=\"Contact info\">Contact</h5><p class=\"property-content\">");
  stack1 = helpers._triageMustache.call(depth0, "contact", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p></div><div class=\"property\"><h5 class=\"has-tip\"\ndata-description=\"What OS and Tor version the relay is using\"\ntitle=\"Platform\">Platform</h5><p class=\"property-content\">");
  stack1 = helpers._triageMustache.call(depth0, "platform", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p></div><div class=\"property\"><h5 class=\"has-tip\"\ndata-description=\"Country as found in a GeoIP database by resolving the relay's first onion-routing address.\"\ntitle=\"Country\">Country</h5><p class=\"property-content\">");
  data.buffer.push(escapeExpression((helper = helpers.flaggifyShort || (depth0 && depth0.flaggifyShort),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "country", options) : helperMissing.call(depth0, "flaggifyShort", "country", options))));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.fullCountry || (depth0 && depth0.fullCountry),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "country", options) : helperMissing.call(depth0, "fullCountry", "country", options))));
  data.buffer.push("</p></div><div class=\"property\"><h5 class=\"has-tip\"\ndata-description=\"Address and port where the relay listens for directory requests.\"\ntitle=\"Directory port\">Dir Address</h5><p class=\"property-content\">");
  stack1 = helpers._triageMustache.call(depth0, "dir_address", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p></div><div class=\"property\"><h5 class=\"has-tip\"\ndata-description=\"Autonomous System Number\"\ntitle=\"AS Number\">AS Number</h5><p class=\"property-content\">");
  stack1 = helpers._triageMustache.call(depth0, "as_number", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p></div><div class=\"property\"><h5 class=\"has-tip\"\ndata-description=\"Autonomous System Name\"\ntitle=\"AS Name\">AS Name</h5><p class=\"property-content\">");
  stack1 = helpers._triageMustache.call(depth0, "as_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p></div><div class=\"property\"><h5 class=\"has-tip\"\ndata-description=\"Family Members\"\ntitle=\"Other family members of this relay.\">Family Members</h5><div class=\"property-content\"><ul class=\"item-list\">");
  stack1 = helpers.each.call(depth0, "family", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</ul></div></div></div></div></div><div class=\"tabs\"><div class=\"tab-title\">Periods\n</div>");
  stack1 = helpers.each.call(depth0, "periods", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div><div class=\"text-content\">");
  data.buffer.push(escapeExpression((helper = helpers['bandwidth-stats'] || (depth0 && depth0['bandwidth-stats']),options={hash:{
    'dateWindow': ("dateWindow"),
    'period': ("selectedPeriod"),
    'data': ("controller.bandwidthData"),
    'timePeriods': ("controller.bandwidthPeriods")
  },hashTypes:{'dateWindow': "ID",'period': "ID",'data': "ID",'timePeriods': "ID"},hashContexts:{'dateWindow': depth0,'period': depth0,'data': depth0,'timePeriods': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bandwidth-stats", options))));
  data.buffer.push("</div><div class=\"text-content\">");
  data.buffer.push(escapeExpression((helper = helpers['weight-stats'] || (depth0 && depth0['weight-stats']),options={hash:{
    'dateWindow': ("dateWindow"),
    'period': ("selectedPeriod"),
    'data': ("controller.weightData"),
    'timePeriods': ("controller.weightPeriods")
  },hashTypes:{'dateWindow': "ID",'period': "ID",'data': "ID",'timePeriods': "ID"},hashContexts:{'dateWindow': depth0,'period': depth0,'data': depth0,'timePeriods': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "weight-stats", options))));
  data.buffer.push("</div><div class=\"text-content\">");
  data.buffer.push(escapeExpression((helper = helpers['uptime-stats'] || (depth0 && depth0['uptime-stats']),options={hash:{
    'dateWindow': ("dateWindow"),
    'period': ("selectedPeriod"),
    'data': ("controller.uptimeData"),
    'timePeriods': ("controller.uptimePeriods")
  },hashTypes:{'dateWindow': "ID",'period': "ID",'data': "ID",'timePeriods': "ID"},hashContexts:{'dateWindow': depth0,'period': depth0,'data': depth0,'timePeriods': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "uptime-stats", options))));
  data.buffer.push("</div></div>");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("<h4 class=\"has-tip\"\ndata-description=\"The time since this relay is online.\"\ntitle=\"Uptime\">uptime</h4><p>");
  data.buffer.push(escapeExpression((helper = helpers.uptimeFull || (depth0 && depth0.uptimeFull),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "last_restarted", options) : helperMissing.call(depth0, "uptimeFull", "last_restarted", options))));
  data.buffer.push("</p>");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("<h4 class=\"has-tip\"\ndata-description=\"The time since this relay was last seen online.\"\ntitle=\"Downtime\">downtime</h4><p>");
  data.buffer.push(escapeExpression((helper = helpers.uptimeFull || (depth0 && depth0.uptimeFull),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "last_seen", options) : helperMissing.call(depth0, "uptimeFull", "last_seen", options))));
  data.buffer.push("</p>");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<li>");
  stack1 = helpers._triageMustache.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>");
  return buffer;
  }

function program8(depth0,data) {
  
  
  data.buffer.push("<li>none</li>");
  }

function program10(depth0,data) {
  
  
  data.buffer.push("<strong class=\"true\">accept</strong>");
  }

function program12(depth0,data) {
  
  
  data.buffer.push("<strong class=\"false\">reject</strong>");
  }

function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<div class=\"property-content\"><ul class=\"property-content item-list\">");
  stack1 = helpers.each.call(depth0, "exit_policy_summary.accept", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</ul></div>");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<div class=\"property-content\"><ul class=\"item-list\">");
  stack1 = helpers.each.call(depth0, "exit_policy_summary.reject", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</ul></div>");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '';
  data.buffer.push("<li><i ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "visitFamilyMember", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" title=\"open family member details\" class=\"button fa fa-external-link-square\"></i> ");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "familyToFingerprint", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data})));
  data.buffer.push("</li>");
  return buffer;
  }

function program20(depth0,data) {
  
  var helper, options;
  data.buffer.push(escapeExpression((helper = helpers['tab-item'] || (depth0 && depth0['tab-item']),options={hash:{
    'active': ("active"),
    'title': ("title"),
    'key': ("key"),
    'tabActivated': ("tabActivated")
  },hashTypes:{'active': "ID",'title': "ID",'key': "ID",'tabActivated': "STRING"},hashContexts:{'active': depth0,'title': depth0,'key': depth0,'tabActivated': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "tab-item", options))));
  }

function program22(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("<div class=\"text-content\">");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[],types:[],data:data}
  if (helper = helpers['loading-indicator']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['loading-indicator']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['loading-indicator']) { stack1 = blockHelperMissing.call(depth0, 'loading-indicator', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>");
  return buffer;
  }
function program23(depth0,data) {
  
  
  data.buffer.push("<p class=\"align-center no-width-limit\">No detail found <i class=\"fa fa-meh-o\"></i></p>");
  }

  data.buffer.push("<div class=\"pure-g\"><div class=\"pure-u-1\">");
  stack1 = helpers['if'].call(depth0, "controller.showContent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(22, program22, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div></div>");
  return buffer;
  
});

Ember.TEMPLATES["summarySearch"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("Search results for \"");
  stack1 = helpers._triageMustache.call(depth0, "query", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\":");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Showing all results:");
  }

function program5(depth0,data) {
  
  
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "GLOBE.BridgeSummariesView", {hash:{
    'dataBinding': ("bridges.content")
  },hashTypes:{'dataBinding': "STRING"},hashContexts:{'dataBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  }

function program7(depth0,data) {
  
  
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "GLOBE.RelaySummariesView", {hash:{
    'dataBinding': ("relays.content")
  },hashTypes:{'dataBinding': "STRING"},hashContexts:{'dataBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  }

  data.buffer.push("<div class=\"pure-g\"><div class=\"pure-u-1\"><div class=\"text-content\"><h3>");
  stack1 = helpers['if'].call(depth0, "query", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<div\n");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":tabbed-item relaysActive:tabbed-active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "activateSummaries", "relays", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push("><div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":indicator relays.length:indicator-important")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "controller.relays.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div><span>Relays</span></div><div\n");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":tabbed-item bridgesActive:tabbed-active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "activateSummaries", "bridges", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
  data.buffer.push("><div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":indicator bridges.length:indicator-important")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "controller.bridges.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div><span>Bridges</span></div></h3>");
  stack1 = helpers.view.call(depth0, "GLOBE.SummaryHolderView", {hash:{
    'isVisibleBinding': ("bridgesActive")
  },hashTypes:{'isVisibleBinding': "STRING"},hashContexts:{'isVisibleBinding': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  stack1 = helpers.view.call(depth0, "GLOBE.SummaryHolderView", {hash:{
    'isVisibleBinding': ("relaysActive")
  },hashTypes:{'isVisibleBinding': "STRING"},hashContexts:{'isVisibleBinding': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div></div></div>");
  return buffer;
  
});

Ember.TEMPLATES["top10"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"pure-g\"><div class=\"pure-u-1\"><div class=\"text-content\"><h3>Top 10 relays by consensus weight</h3>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "GLOBE.RelaySummariesView", {hash:{
    'dataBinding': ("controller.content")
  },hashTypes:{'dataBinding': "STRING"},hashContexts:{'dataBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div></div></div>");
  return buffer;
  
});