javascript: var GUI=document.createElement("div"); GUI.innerHTML='<div style="margin: 0; padding: 0; position: absolute; z-index: 9999999; left: 1px; top: 1px;"><div id="main" style="margin: 0; padding: 0; z-index: 999999999; position: fixed;"><div id="changeLogs" style="padding: 0; margin: 0; position: absolute; top: 25px; left: 125px; z-index: 9999; height: 200px; width: 200px; color: #ffb6b3;"><p color: color: #ffb6b3; font-family: monospace; font-weight:5px;>Changelogs:</br></br>Added Changelogs</br>Changed Calc Logo</p></div><div style="margin: 0; padding: 0; z-index: 1; position: absolute; background-color: #0f0f0f; left: 50%; top: 30%; height: 400px; width: 700px; border: 10px #ffb6b3 solid; border-radius: 20px;"><div id="windowContainer" style="height: 25px; width: 700px;"><div id="logo" style="margin 2; position: absolute; top 25px; left: 30px; font-family: monospace; font-weight: 5px; font-size: 20px; color: #ffb6b3"; >Nova Client</div><div id="window" style="background-color: #ffb6b3; position: absolute; top: 25px; width: 100%; height: 5px;"><div></div></div></div><div id="sidebar"style="margin: 0; padding: 0; background-color: #ffb6b3; position: absolute; height: 95%; width: 15px; left: 100px; top: 25px;"><div id="consoleHolder" style="margin 0; padding: 0; position: absolute; left: -100px; top: 30px; height: 80px; width: 80px; align-text: center;"><button id="console" onclick="InnerHTMANIP()" style="color: #ffb6b3; align-text: center; font-size: 50px; font-weight: 20px; font-family: monospace; background-color: Transparent; border: none; background-repeat: no-repeat; cursor: pointer; overflow: hidden; outline: none;">Cal</button></div></div></div></div></div>'; var DECO=document.createElement("style"); DECO.textContent=''; document.body.appendChild(GUI); document.head.appendChild(DECO); function elementete() {document.getElementById("inbut").value=""}; function evall() {document.getElementById("output4eval").innerText=eval(document.getElementById("inbut").value)}; function InnerHTMANIP() {GUI.innerHTML='<div style="position: absolute; z-index: 9999999; left: 1px; top: 1px;"><div id="main" style="margin: 0; padding: 0; z-index: 999999999; position: fixed;"><div id="center" style="position: absolute; left: 125px; width: 575px; top: 45px; height: 365px; z-index: 99999;"><input id="inbut" style="margin: 0; position: absolute; top:-10px; left: -5px; width: 104%; height: 60px; font-size: 30px; font-family: monospace; background-color: Transparent; outline: none; color: #ffb6b3; border: #ffb6b3; border-width:5px; border-style:solid; border-radius: 3px;"></input><p id="output4eval" style="position: absolute; top:60px; font-size: 30px; color: #ffb6b3; font-family: monospace; margin: 2;">No output</p><button onclick="evall()" style="position: absolute; font-family: monospace; left: 5px; text-align: center; background-color: #ffb6b3; color: #0f0f0f; border: none; background-repeat: no-repeat; cursor: pointer; overflow: hidden; outline: none; font-family: monospace; font-size: 20px; width: 50px; height: 50px; top: 300px; border-radius: 10px;">Run</button><button onclick="elementete()" style="position: absolute; font-family: monospace; left: 65px; text-align: center; background-color: #ffb6b3; color: #0f0f0f; border: none; background-repeat: no-repeat; cursor: pointer; overflow: hidden; outline: none; font-family: monospace; font-size: 20px; width: 50px; height: 50px; top: 300px; border-radius: 10px;">Clr</button></div><div style="margin: 0; padding: 0; z-index: 1; position: absolute; background-color: #0f0f0f; left: 50%; top: 30%; height: 400px; width: 700px; border: 10px #ffb6b3 solid; border-radius: 20px;"><div id="windowContainer" style="height: 25px; width: 700px;"><div id="logo" style="margin 2; position: absolute; top 25px; left: 30px; font-family: monospace; font-weight: 5px; font-size: 20px; color: #ffb6b3"; >Nova Client</div><div id="window" style="background-color: #ffb6b3; position: absolute; top: 25px; width: 100%; height: 5px;"><div></div></div></div><div id="sidebar"style="padding: 0; background-color: #ffb6b3; position: absolute; height: 95%; width: 15px; left: 100px; top: 25px;"><div id="consoleHolder" style="margin 0; padding: 0; text-align: center; align-text: center; position: absolute; left: -100px; top: 30px; height: 80px; width: 80px; align-text: center;"><button id="console" style=" color: #ffb6b3; align-text: center; font-size: 50px; font-weight: 20px; font-family: monospace; background-color: Transparent; border: none; background-repeat: no-repeat; cursor: pointer; overflow: hidden; outline: none;">Cal</button></div></div></div></div></div>'};