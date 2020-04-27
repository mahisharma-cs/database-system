// NLS_CHARSET=UTF-8
function showFooter (theDate) {
  // START NON-TRANSLATABLE
  // DB2 for LUW footer script - v9.7.15
  var transLup = transLupText + " " + theDate;
  var lc = self.location.href.replace(/(\?|#|%3F|%23).*$/, '');
  var docPath=document.title;
  var reURL = new RegExp("\/(com.ibm.[^\\?]*)");
  var mURL  =  reURL.exec(lc);
  if (mURL != null) { docPath = mURL[1]; }

  var grpPath='com.ibm.help.doc\/images\/';
  grpPath = relativeToRoot(docPath) + grpPath;
  var reTCRS = new RegExp("\/(.)[^\/]*?$");
  var mType = reTCRS.exec(lc);
  var doct="x";
  var dtString = "";
  if (mType != null) { doct = mType[1]; }
  doct = typeFromMeta("DC.Type");
  switch (doct) {
      case 'task': dtString = "<img src='"+ grpPath + "task_obj.gif' alt='' width='16' height='16'\/> <strong>"+ transTsk + "<\/strong>"; break;
      case 'concept': dtString = "<img src='"+ grpPath + "concept_obj.gif' alt='' width='16' height='16'\/> <strong>"+ transCon + "<\/strong>"; break;
      case 'reference': dtString = "<img src='"+ grpPath + "reference_obj.gif' alt='' width='16' height='16'\/> <strong>"+ transRef + "<\/strong>"; break;
      case 'msg': dtString = "<img src='"+ grpPath + "reference_obj.gif' alt='' width='16' height='16'\/> <strong>"+ transMsg + "<\/strong>"; break;
      case 'sample': dtString = "<img src='"+ grpPath + "sample_obj.gif' alt='' width='16' height='16'\/> <strong>" + transSmp + "<\/strong>"; break;
      case 'tutorialLesson':
      case 'tutorialIntro': dtString = "<img src='"+ grpPath + "tutorial_obj.gif' alt='' width='16' height='16'\/> <strong>" + transTut + "<\/strong>"; break;
      default: dtString = "";
  }
  //var fbString = " <a href='mailto:db2docs@ca.ibm.com?subject=Galileo feedback on "+ docPath +"'>"+transFdb+"<\/a> ";
  document.write(dtString);

}
function typeFromMeta(theName) {
	var metas = document.getElementsByTagName('META');
  var i;
  for (i = 0; i < metas.length; i++)
    if (metas[i].getAttribute('NAME') == theName)
      break;
  var TestVar = metas[i].getAttribute('CONTENT');
  return TestVar;
}

function relativeToRoot(topicFromRoot) {            // counts the number of slashes in the topic's pathname and returns a string (upDir) to reach the root dir
  var matches = topicFromRoot.match(/\//g).length;  // count the number of slashes
  var upDir="";
  for (var i = 0; i < matches; i++) {               // for each slash, add "../" to upDir
    upDir += "../";
  }
  return upDir;
}

function checkUpdate() {
  var topicLang = typeFromMeta("DC.Language");
  addKCText();
  if (topicLang == 'en-us') {
  	return 1;
  }

  var freshPlugin = "com.ibm.db2.luw.fresh.doc";
var old = Array();
old["com.ibm.db2.luw.admin.cmd.doc/doc/r0002045.html"] = 1;
old["com.ibm.db2.luw.admin.cmd.doc/doc/r0002051.html"] = 1;
old["com.ibm.db2.luw.admin.mon.doc/doc/r0022294.html"] = 1;

old["com.ibm.db2.luw.admin.regvars.doc/doc/r0005660.html"] = 1;
old["com.ibm.swg.im.dbclient.config.doc/doc/r0055198.html"] = 1;

old["com.ibm.db2.luw.admin.cmd.doc/doc/r0011729.html"] = 1;
old["com.ibm.db2.luw.sql.ref.doc/doc/r0050563.html"] = 1;

old["com.ibm.db2.luw.admin.mon.doc/doc/c0055566.html"] = 1;
old["com.ibm.db2.luw.sql.ref.doc/doc/r0055062.html"] = 1;

old["com.ibm.db2.luw.admin.cmd.doc/doc/r0002025.html"] = 1;

old["com.ibm.db2.luw.admin.config.doc/doc/r0000294.html"] = 1;
old["com.ibm.db2.luw.admin.regvars.doc/doc/r0005669.html"] = 1;

old["com.ibm.db2.luw.admin.mon.doc/doc/r0059453.html"] = 1;
old["com.ibm.db2.luw.admin.mon.doc/doc/r0059534.html"] = 1;
old["com.ibm.db2.luw.admin.nse.topics.doc/doc/c0052083.html"] = 1;
old["com.ibm.db2.luw.qb.dbconn.doc/doc/r0008484.html"] = 1;
old["com.ibm.db2.luw.qb.dbconn.doc/doc/r0008535.html"] = 1;
old["com.ibm.db2.luw.qb.server.doc/doc/c0057140.html"] = 1;
old["com.ibm.db2.luw.qb.server.doc/doc/r0008865.html"] = 1;
old["com.ibm.db2.luw.qb.server.doc/doc/r0023732.html"] = 1;
old["com.ibm.db2.luw.qb.server.doc/doc/t0008238.html"] = 1;


old["com.ibm.db2.luw.admin.cmd.doc/doc/r0001966.html"] = 1;
old["com.ibm.db2.luw.admin.config.doc/doc/r0000276.html"] = 1;
old["com.ibm.db2.luw.admin.partition.doc/doc/c0022245.html"] = 1;
old["com.ibm.db2.luw.admin.perf.doc/doc/c0007338.html"] = 1;
old["com.ibm.db2.luw.admin.regvars.doc/doc/r0005665.html"] = 1;

old["com.ibm.db2.luw.admin.cmd.doc/doc/r0001933.html"] = 1;
old["com.ibm.db2.luw.admin.cmd.doc/doc/r0001976.html"] = 1;
old["com.ibm.db2.luw.admin.cmd.doc/doc/r0001993.html"] = 1;
old["com.ibm.db2.luw.admin.cmd.doc/doc/r0052775.html"] = 1;
old["com.ibm.db2.luw.admin.ha.doc/doc/c0061161.html"] = 1;
old["com.ibm.db2.luw.admin.ha.doc/doc/c0061162.html"] = 1;
old["com.ibm.db2.luw.admin.ha.doc/doc/c0061163.html"] = 1;
old["com.ibm.db2.luw.admin.ha.doc/doc/r0052832.html"] = 1;
old["com.ibm.db2.luw.admin.ha.doc/doc/t0061159.html"] = 1;
old["com.ibm.db2.luw.admin.ha.doc/doc/t0061160.html"] = 1;
old["com.ibm.db2.luw.apdv.api.doc/doc/r0008578.html"] = 1;
old["com.ibm.db2.luw.apdv.api.doc/doc/r0008582.html"] = 1;
old["com.ibm.db2.luw.sql.rtn.doc/doc/r0023569.html"] = 1;
old["com.ibm.db2.luw.sql.rtn.doc/doc/r0023596.html"] = 1;

old["com.ibm.db2.luw.admin.dbobj.doc/doc/c0005420.html"] = 1;
old["com.ibm.db2.luw.apdv.cli.doc/doc/r0000584.html"] = 1;
old["com.ibm.db2.luw.qb.upgrade.doc/doc/c0022266.html"] = 1;
old["com.ibm.db2.luw.qb.upgrade.doc/doc/r0022380.html"] = 1;
old["com.ibm.db2.luw.qb.upgrade.doc/doc/t0006355.html"] = 1;
old["com.ibm.db2.luw.qb.upgrade.doc/doc/t0050541.html"] = 1;

old["com.ibm.db2.luw.sql.ref.doc/doc/r0001037.html"] = 1;

old["com.ibm.db2.luw.admin.cmd.doc/doc/r0052380.html"] = 1;
old["com.ibm.db2.luw.admin.cmd.doc/doc/r0061332.html"] = 1;
old["com.ibm.db2.luw.admin.config.doc/doc/r0000267.html"] = 1;
old["com.ibm.db2.luw.admin.config.doc/doc/r0000268.html"] = 1;
old["com.ibm.db2.luw.admin.config.doc/doc/r0053616.html"] = 1;
old["com.ibm.db2.luw.admin.config.doc/doc/r0053617.html"] = 1;
old["com.ibm.db2.luw.admin.ha.doc/doc/c0052870.html"] = 1;
old["com.ibm.db2.luw.admin.ha.doc/doc/c0054258.html"] = 1;
old["com.ibm.db2.luw.admin.sec.doc/doc/c0005815.html"] = 1;
old["com.ibm.db2.luw.admin.sec.doc/doc/c0050524.html"] = 1;
old["com.ibm.db2.luw.admin.sec.doc/doc/c0053544.html"] = 1;
old["com.ibm.db2.luw.admin.sec.doc/doc/c0061464.html"] = 1;
old["com.ibm.db2.luw.admin.sec.doc/doc/c0061465.html"] = 1;
old["com.ibm.db2.luw.admin.ts.doc/doc/t_performanceconsiderations.html"] = 1;
old["com.ibm.db2.luw.apdv.cli.doc/doc/t0006416.html"] = 1;
old["com.ibm.db2.luw.apdv.porting.doc/doc/r0052880.html"] = 1;
old["com.ibm.db2.luw.doc/welcome.html"] = 1;
old["com.ibm.db2.luw.qb.server.doc/doc/t0011028.html"] = 1;
old["com.ibm.db2.luw.qb.upgrade.doc/doc/t0061334.html"] = 1;
old["com.ibm.db2.luw.sql.ref.doc/doc/r0000890.html"] = 1;
old["com.ibm.db2.luw.sql.ref.doc/doc/r0000929.html"] = 1;
old["com.ibm.db2.luw.sql.ref.doc/doc/r0000977.html"] = 1;
old["com.ibm.db2.luw.sql.rtn.doc/doc/r0055069.html"] = 1;
old["com.ibm.db2.luw.wn.doc/doc/c0053352.html"] = 1;
old["com.ibm.db2.luw.wn.doc/doc/c0056050.html"] = 1;
old["com.ibm.db2.luw.wn.doc/doc/c0061452.html"] = 1;
old["com.ibm.swg.im.dbclient.install.doc/doc/t0061333.html"] = 1;































































//

  var lc = self.location.href.replace(/(\?|#|%3F|%23).*$/, '');
  var reURL = new RegExp("\/(com.ibm.[^\\?]*)");
  var mURL  =  reURL.exec(lc);
  var docPath = null;
  if (mURL != null) { docPath = mURL[1]; }

  var freshTopic = old[docPath];
  if (freshTopic != 1) {
  	return 1;
  }

  upDir = relativeToRoot(docPath);
  var myLink = upDir + freshPlugin + "/" + docPath;
  myLink += "?noframes=true";
  var explainUpdatesLink = upDir + "com.ibm.db2.luw.common.doc/doc/c0025130.html";
  var windowParms = "'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=720, width=540, left=50, top=50'";
  var linkHTML ="<p><a href=\"javascript:void window.open('" + myLink + "', 'fresh', " + windowParms + ")\">" + updatedEnglishText +"<\/a> " +
								"<a href=\"" + explainUpdatesLink + "\">" + explainUpdatesText +"<\/a><\/p>";
	document.write(linkHTML);
	return 1;
	// END NON-TRANSLATABLE
}
function addKCText() 
{
 var user=getCookie("userCheck");
    if (user != "") 
	{
        //Do nothing.
    } else 
	{
      //Write the message.
	document.write(KCInfoText);
     
    }
}

function setCookie() 
{
	var cname = "userCheck";
	var cvalue = "checked";
	var exdays = 10000;
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/;";
  
	
	 document.getElementById('welcomeMessage').style.display = 'none';
	 


}

function getCookie(cname) 
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
	
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
