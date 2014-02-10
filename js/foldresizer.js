/*
* ResizeFold JavaScript Plugin
* Intructions: http://xaviesteve.com/resizable-background-image-in-any-container-plugin-for-jquery/
* By: Xavi Esteve, http://xaviesteve.com/
* Version: 1.0
* Updated: April 27th, 2011
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
* Example: foldresizer('containerID', freeheight, minheight);
*
*/
function foldresizer(fs_container, fs_freespace, fs_minheight) {
	var winW, winH;
	if (document.body && document.body.offsetWidth) {
		winW = document.body.offsetWidth;winH = document.body.offsetHeight;
	}
	if (document.compatMode=='CSS1Compat' && document.documentElement && document.documentElement.offsetWidth ) {
		winW = document.documentElement.offsetWidth;winH = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) {
		winW = window.innerWidth;winH = window.innerHeight;
	}
	var bigheadheight = winH - fs_freespace;
	if (!fs_minheight) {fs_minheight = 0;}
	if (bigheadheight < fs_minheight) {bigheadheight=fs_minheight;}
	document.getElementById('bighead').style.height = bigheadheight + "px";
}