﻿/*
	Include in output:

	This file is part of Natural Docs, which is Copyright © 2003-2011 Greg Valure.
	Natural Docs is licensed under version 3 of the GNU Affero General Public
	License (AGPL).  Refer to License.txt for the complete details.

	This file may be distributed with documentation files generated by Natural Docs.
	Such documentation is not covered by Natural Docs' copyright and licensing,
	and may have its own copyright and distribution terms as decided by its author.

*/


/* Class: NDContentPage
	_____________________________________________________________________________

*/
var NDContentPage = new function ()
	{

	// Group: Functions
	// ________________________________________________________________________


	/* Function: Start
	*/
	this.Start = function ()
		{
		if (window.NDPageFrame != undefined)
			{  this.pageFrame = window.NDPageFrame;  }
		else if (window.parent != undefined && window.parent.NDPageFrame != undefined)
			{  this.pageFrame = window.parent.NDPageFrame;  }
		else
			{  this.pageFrame = undefined;  }
		
		if (this.pageFrame !== undefined)
			{  this.pageFrame.UpdatePageTitle(document.title);  }
		};



	// Group: Variables
	// ________________________________________________________________________

	/* var: pageFrame
		A reference to <NDPageFrame>, or undefined if it can't be found.
	*/

	};