import{_ as e,o as n,c as s,e as a}from"./app-e6168212.js";const t="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAaADoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3YbpckOUUEgAAduO9L5bf89pPyX/CiH/Vn/fb/wBCNUPEFpc3ujzRWkjpMPmCqceZjnbkEEZ+opiL/lt/z2k/Jf8ACjy2/wCe0n5L/hXM2a3mpazYyxy30cNlH5Vw04C73Xg8BsEtnnIONowRVjXdZvbHW9NsLV440uY5HdzYS3R+VkAGI2G0fOcseBgUW1sBveW3/PaT8l/wo8tv+e0n5L/hWFP4vtLaOaaWyvlt0WRo5tilZ9hwwQBt2f8AeAzjjNGmeJTe69eaXLayRzxSDbEAu6KPykYtIQxH3mwMflwSBagbvlt/z2k/Jf8ACiKNnhRzM+WUE4C/4VJSW3/HrF/uD+VICOEgBl7hmyPqSalqGaNGI3Ip+oqPyYv+eaf98imBX0nRoNH+0eTJI/nybzvxx7cDnr1PJq21nA99FetHm4ijaJHyeFYqWGOnVV/KmeTF/wA80/75FHkxf880/wC+RRcCm3hnSHedmtmYTBgyGaQou45bYu7CZPJ2gZ71YGj2A1A34gxdGTzDKHYEnYE9em1V46cA4yM1J5MX/PNP++RR5MX/ADzT/vkUAWqS2/49Yv8AcH8qreTF/wA80/75FAijx/q1/KkB/9k=",o="/BlenderTools/assets/2-9536ed9a.jpg",i={},l=a('<h1 id="help-develop" tabindex="-1"><a class="header-anchor" href="#help-develop" aria-hidden="true">#</a> Help Develop</h1><p>When contributing to this repository, please first discuss the change you wish to make via issue, with the owners of this repository, before making a change. Each pull request must first be an issue.</p><h2 id="pull-request-process" tabindex="-1"><a class="header-anchor" href="#pull-request-process" aria-hidden="true">#</a> Pull Request Process</h2><ol><li>Fork the repository.</li><li>Create a branch in your fork that matches the name of the issue you&#39;re working on.</li><li>Add the new feature or fix.</li><li>Run the unit tests and ensure that none fail.</li><li>Submit a pull request from your forked branch back to the <code>dev</code> branch of the repository.</li><li>Include the updated documentation in the pull request.</li><li>The pull request will be reviewed, then merged into <code>dev</code> if all tests pass, the changes will be pushed to the <code>master</code> branch and a new versioned build will be made.</li></ol><div class="custom-container tip"><p class="custom-container-title">Note</p><p>Any new features require an accompanying unit test for it to be approved.</p></div><h2 id="getting-setup" tabindex="-1"><a class="header-anchor" href="#getting-setup" aria-hidden="true">#</a> Getting Setup</h2><p>Fork the <code>BlenderTools</code> repository.</p><p><img src="'+t+'" alt="1"></p><p>Create a branch in your fork with the name of the task/issue you are working on.</p><p><img src="'+o+`" alt="2"></p><p>Clone your fork and checkout that branch:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/<span class="token operator">&lt;</span>your-username<span class="token operator">&gt;</span>/BlenderTools.git
<span class="token builtin class-name">cd</span> BlenderTools
<span class="token function">git</span> checkout some-task-branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="testing-your-changes" tabindex="-1"><a class="header-anchor" href="#testing-your-changes" aria-hidden="true">#</a> Testing your changes</h2><p>While developing, you will want to be able to rapidly test your new changes. You can do this by running this script in the Blender Script Editor.</p><div class="custom-container tip"><p class="custom-container-title">Note</p><p>You need to change <code>&lt;your-repo-location&gt;</code> to match the absolute path to the scripts folder in your local project. Running this script installs and reloads the tool.</p></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> bpy
<span class="token keyword">import</span> sys
sys<span class="token punctuation">.</span>path<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">r&#39;C:\\&lt;your-repo-location&gt;\\BlenderTools\\scripts&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">import</span> dev_helpers

addons <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;send2ue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ue2rigify&#39;</span><span class="token punctuation">]</span>

<span class="token comment"># installs the actual addons zips</span>
<span class="token comment">#dev_helpers.reload_addon_zips(addons)</span>

<span class="token comment"># reloads the code from your repo. A lot faster but doesn&#39;t load addon preferences</span>
dev_helpers<span class="token punctuation">.</span>reload_addon_source_code<span class="token punctuation">(</span>addons<span class="token punctuation">)</span>

<span class="token comment"># start blender and unreal rpc server for automated testing</span>
<span class="token comment">#bpy.ops.send2ue.start_rpc_servers()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In most cases you can get away with running <code>dev_helpers.reload_addon_source_code</code>, which reloads very fast and any stack traces get linked back to the repo code.</p><p>However, the true test is running <code>dev_helpers.reload_addon_zips</code> this actually zips up the code and installs the addons. You will need to do this if you are testing features that rely on properties in the addon preferences.</p><p><code>bpy.ops.send2ue.start_rpc_servers()</code> Ensures that both unreal and blender rpc servers are running. This is needed if you want to run the unittests on the open app instances.</p><h2 id="hot-reloading-from-pycharm" tabindex="-1"><a class="header-anchor" href="#hot-reloading-from-pycharm" aria-hidden="true">#</a> Hot reloading from PyCharm</h2><p>These steps must be completed in-order for the addons to hot-reload while you type in PyCharm.</p><ol><li>If you have the addons already installed, uninstall them and shutdown Blender and PyCharm.</li><li>You must symlink the addon folders into the blender addon installation location. Then enable the addons<div class="custom-container tip"><p class="custom-container-title">Windows</p><p>Run this from a commandline launched as administrator. Swapping out the last path with your own.</p><div class="language-commandline" data-ext="commandline"><pre class="language-commandline"><code>mklink /D &quot;%APPDATA%\\Blender Foundation\\Blender\\3.4\\scripts\\addons\\send2ue&quot; &quot;D:\\repos\\BlenderTools\\send2ue&quot;
</code></pre></div></div></li><li>You must install the <code>./scripts/addon-watcher.xml</code> in Pycharm by going to <code>Settings &gt; Tools &gt; File Watchers &gt; Import</code></li><li>And finally blender has to be running with the send2ue addon enabled and clicking <code>Pipeline &gt; Utilities &gt; Start RPC Servers</code> Now PyCharm should reload your addons on file save events.</li></ol><h2 id="code-structure" tabindex="-1"><a class="header-anchor" href="#code-structure" aria-hidden="true">#</a> Code Structure</h2><p>This is how the addon code is structured. You will see this primary file and folder structure in each of the addons.</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>.
├── ...
├── send2ue             # The root folder for the plugin
│   ├── core            # This folder contains all the core logic of the tool.
│   ├── dependencies    # This folder contains dependencies that have been added into the tool.
│   ├── resources       # This folder contains templates, settings, and extensions.
│   ├── ui              # This folder contains all UI classes for the tool.
│   ├── __init__.py     # This contains the plugin and initialization and uninitialization calls for all operators, properties and events.
│   ├── constants.py    # This file holds hard coded values that the tool utilizes.
│   ├── properties.py   # This file contains the property data definition for the tool. All tool properties should live in here.
│   └── operators.py    # This file contains all operator class definitions. This serves as the entry point to all logic that lives in the core module.
└── ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),d=[l];function r(c,p){return n(),s("div",null,d)}const h=e(i,[["render",r],["__file","development.html.vue"]]);export{h as default};