import{_ as s,r,o as a,c as i,a as e,b as t,d as n,e as l}from"./app-3ee0fe23.js";const d="/BlenderTools/send2ue/assets/1-4b2a10d9.png",c="/BlenderTools/send2ue/assets/2-a59ea7bd.png",p="/BlenderTools/send2ue/assets/3-86255f56.png",u="/BlenderTools/send2ue/assets/4-d524df0a.png",h="/BlenderTools/send2ue/assets/5-3cb08819.png",g="/BlenderTools/send2ue/assets/6-fcb1116d.png",m="/BlenderTools/send2ue/assets/6_1-1e24708d.png",_="/BlenderTools/send2ue/assets/16-adf54d66.png",w="/BlenderTools/send2ue/assets/7-02debb4a.png",f="/BlenderTools/send2ue/assets/8-143805ae.png",y="/BlenderTools/send2ue/assets/9-4b88c167.png",b="/BlenderTools/send2ue/assets/10-439d4741.png",k="/BlenderTools/send2ue/assets/11-c068f23e.png",B="/BlenderTools/send2ue/assets/12-f24b27df.png",T="/BlenderTools/send2ue/assets/13-ae1b0f01.png",q="/BlenderTools/send2ue/assets/14-5fd65d86.png",v="/BlenderTools/send2ue/assets/15-03496970.png",x={},S=e("h1",{id:"quickstart",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#quickstart","aria-hidden":"true"},"#"),t(" Quickstart")],-1),E=e("p",null,"This quick start guide will help you get up and running with Send to Unreal.",-1),U={href:"https://github.com/EpicGames/BlenderTools/releases?q=Send+to+unreal&expanded=true",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"Assets",-1),N=e("code",null,"send2ue",-1),j={class:"custom-container tip"},C=e("p",{class:"custom-container-title"},"Note",-1),G={href:"https://www.unrealengine.com/en-US/ue4-on-github",target:"_blank",rel:"noopener noreferrer"},z=l('<p>Next install the addon in Blender. Go to <code>Edit &gt; Preferences</code> then to the addons tab. Click <code>install</code>.</p><p><img src="'+d+'" alt="1"></p><p>Go to the location where you downloaded your addon on disk and install the zip file.</p><p><img src="'+c+'" alt="2"></p><p>Now search for the addon and activate it.</p><p><img src="'+p+'" alt="3"></p><p>You&#39;ll notice when you activate it. This pipeline menu gets built.</p><p><img src="'+u+'" alt="4"></p><p>Next, you&#39;ll need to configure your unreal project (or verify that your project settings are already correct). So let&#39;s walk through an example with a new project. First, open Unreal and create a new project. Once your project is open, go to <code>Edit &gt; Plugins</code>.</p><p><img src="'+h+'" alt="5"></p><p>Search for the &quot;Python Editor Script Plugin&quot; and enable it. Also ensure that the &quot;Editor Scripting Utilities Plugin&quot; is already enabled.</p><p><img src="'+g+'" alt="6"></p><p>If you are also working with groom assets and would like to export alembic files from blender as unreal groom assets, make sure to also have the plugins &quot;Alembic Groom Importer&quot; and &quot;Groom&quot; enabled.</p><p><img src="'+m+'" alt="6_1"></p><p>Additionally, make sure the &quot;Support Compute Skin Cache&quot; setting is turned on in Project Settings &gt; Engine &gt; Rendering &gt; Optimizations. This ensures grooms to render properly when bound to a skeletal mesh.</p><p><img src="'+_+'" alt="16"></p><p>Once you have enabled the plugins and project settings, you&#39;ll be prompted to restart the editor. Go ahead and restart. Once you&#39;ve restarted, go to <code>Edit &gt; Project Settings</code>.</p><p><img src="'+w+'" alt="7"></p><p>Search for &quot;python&quot; and then enable remote execution. Now Send to Unreal will work with your new Unreal project.</p><p><img src="'+f+'" alt="8"></p><p>Another thing that is useful to enable under <code>Edit &gt; Editor Preferences</code></p><p><img src="'+y+'" alt="9"></p><p>Search for &quot;CPU&quot;, then under Editor Performance disable &quot;Use Less CPU when in Background&quot;. That way unreal continues to update even when it is not the active application, which means the Unreal user interface will update constantly, and you will see your changes update without having to click on the Unreal Editor.</p><p><img src="'+b+'" alt="10"></p><p>Now lets run through a basic example with the default cube in your Blender scene.</p><p><img src="'+k+'" alt="11"></p><p>A simple test we can try in Blender to make sure this is working is move our cube to our <code>Export</code> collection.</p><p><img src="'+B+'" alt="12"></p><p>Click <code>Pipeline &gt; Export &gt; Send to Unreal</code>.</p><p><img src="'+T+'" alt="13"></p><div class="custom-container tip"><p class="custom-container-title">Note</p><p>On Windows, if you see a security alert, go ahead and allow Blender on your private network.</p></div><p>You should now see the cube in unreal under <code>/untitled category/untitled asset/Cube</code>.</p><p><img src="'+q+'" alt="14"></p><p>Congrats, Send to Unreal is now working! To customize Send to Unreal to your needs, go to <code>Pipeline &gt; Export &gt; Settings Dialog</code>. Here you can customize the paths for exports and imports as well as the export and import settings, and validations.</p><img src="'+v+'" alt="15" width="450">',35);function A(I,O){const o=r("ExternalLinkIcon");return a(),i("div",null,[S,E,e("p",null,[t("First thing you need to do is download the latest versioned zip file from the "),e("a",U,[t("releases page"),n(o)]),t(" under the "),P,t(" dropdown. The zip file name will start with "),N,t(".")]),e("div",j,[C,e("p",null,[t("If you get a 404 error when you click the link above, then you will need to sign in to your github account and link it with your Epic Games account. Here is a "),e("a",G,[t("link with instructions"),n(o)]),t(" on how to link your accounts.")])]),z])}const L=s(x,[["render",A],["__file","quickstart.html.vue"]]);export{L as default};