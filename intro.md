# web-dev-interview-questions

- What are the ways to reduce page loading time?
Lazy loading
Build optimization
minification

- Why use HTTP 2.0 over HTTP 1.1?
HTTP/1.1 loads resources one after the other, so if one resource cannot be loaded, it blocks all the other resources behind it. In contrast, HTTP/2 is able to use a single TCP connection to send multiple streams of data at once so that no one resource blocks any other resource
- Differentiate between Canvas and SVG.

- Explain the new APIs provided by HTML5.

```html
<table>
<tbody><tr>
<th>API</th>
<th>What It Does</th>
</tr>
<tr>
<td>Ambient Light API</td>
<td>Provides information about the ambient light levels, as
detected by a device’s light sensor.</td>
</tr>
<tr>
<td>Battery Status API</td>
<td>Provides information about the battery status of the
device.</td>
</tr>
<tr>
<td>Canvas 2D Context</td>
<td>Allows drawing and manipulation of graphics in a browser.</td>
</tr>
<tr>
<td>Clipboard API</td>
<td>Provides access to the operating system’s copy, cut, and
paste functionality.</td>
</tr>
<tr>
<td>Contacts</td>
<td>Allows access to a user’s contacts repository in the web
browser.</td>
</tr>
<tr>
<td>Drag and Drop</td>
<td>Supports dragging and dropping items within and between browser
windows.</td>
</tr>
<tr>
<td>File API</td>
<td>Provides programs with secure access to the device’s file
system.</td>
</tr>
<tr>
<td>Forms</td>
<td>Gives programs access to the new data types defined in
HTML5.</td>
</tr>
<tr>
<td>Fullscreen API</td>
<td>Controls the use of the user’s full screen for web pages,
without the browser user interface.</td>
</tr>
<tr>
<td>Gamepad API</td>
<td>Supports input from USB gamepad controllers.</td>
</tr>
<tr>
<td>Geolocation</td>
<td>Provides web applications with access to geographical location
data about the user’s device.</td>
</tr>
<tr>
<td>getUserMedia/Stream API</td>
<td>Provides access to external device data (such as webcam
video).</td>
</tr>
<tr>
<td>History API</td>
<td>Allows programs to manipulate the browser history.</td>
</tr>
<tr>
<td>HTML Microdata</td>
<td>Provides a way to annotate content with computer-readable
labels.</td>
</tr>
<tr>
<td>Indexed database</td>
<td>Creates a simple client-side database system in the web
browser.</td>
</tr>
<tr>
<td>Internationalization API</td>
<td>Provides access to locale-sensitive formatting and string
comparison.</td>
</tr>
<tr>
<td>Offline apps</td>
<td>Allows programmers to make web apps available in offline
mode.</td>
</tr>
<tr>
<td>Proximity API</td>
<td>Provides information about the distance between a device and an
object.</td>
</tr>
<tr>
<td>Screen Orientation</td>
<td>Reads the screen orientation state (portrait or landscape) and
gives programmers the ability to know when it changes and to lock
it in place.</td>
</tr>
<tr>
<td>Selection</td>
<td>Supports selecting elements in JavaScript using CSS-style
selectors.</td>
</tr>
<tr>
<td>Server-sent events</td>
<td>Allows the server to push data to the browser without the
browser needing to request it.</td>
</tr>
<tr>
<td>User Timing API</td>
<td>Gives programmers access to high-precision timestamps to
measure the performance of applications.</td>
</tr>
<tr>
<td>Vibration API</td>
<td>Allows access to the vibration functionality of the
device.</td>
</tr>
<tr>
<td>Web Audio API</td>
<td>API for processing and synthesizing audio.</td>
</tr>
<tr>
<td>Web Messaging</td>
<td>Allows browser windows to communicate with each other across
different origins.</td>
</tr>
<tr>
<td>Web Speech API</td>
<td>Provides speech input and text-to-speech output features.</td>
</tr>
<tr>
<td>Web storage</td>
<td>Allows the storage of key-value pairs in the browser.</td>
</tr>
<tr>
<td>Web sockets</td>
<td>Opens an interactive communication session between the browser
and server.</td>
</tr>
<tr>
<td>Web Workers</td>
<td>Allows JavaScript to execute scripts in the background.</td>
</tr>
<tr>
<td>XMLHttpRequest2</td>
<td>Improves <span class="code">XMLHttpRequest</span> to eliminate
the need to work around the same-origin policy errors and to make
<span class="code">XMLHttpRequest</span> work with new features of
HTML5.</td>
</tr>
</tbody></table>
    ```
5. Explain CORS.
Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain.
Browsers allow a web page to make AJAX requests only with in the same domain. Browser security prevents a web page from making AJAX requests to another domain. This is called same origin policy.

7. Difference between null value and undefined value.
null is a special keyword that indicates an absence of value.
undefined property indicates that a variable has not been assigned a value including null too . Like

8. Put some light on the scope in JavaScript

9. Explain pseudo-class.

10. Which tool is an ideal one: CSS Animations or JavaScript Animations?

11. What is Namespacing in JavaScript?

12. Differentiate between ‘==’ and ‘===’ operators.

13. Explain the new form elements introduced in HTML5.

14. Differentiate between IDs and Classes.

15. What are the web development tools to be aware of?

16. Differentiate between HTML and XHTML.

17. What is HTTP/3?

18. Explain JavaScript and how to use Type Coercion.

19. Explain npm.

20. What is DOM?

21. Differentiate between div tag and span in HTML5.

- design system- Storybook
- way to secure frontend code
- how to look into the memory leak problem
- Sentry: Application Monitoring and Error Tracking Software
- pwas,  SPA
- Rendering techniques
- CSS architectures, Preprocessors
- accessibility
- web components

------------------------
Difference Between Dynamic & Static Web Pages
Static Web pages display the exact same information whenever anyone visits it. Static Web pages do not have to be simple plain text. 
They can feature detailed multimedia design and even videos. 
However, every visitor to that page will be greeted by the exact same text, multimedia design or video every time he visits the page until you alter that page's source code.

Dynamic Web pages are capable of producing different content for different visitors from the same source code file. 
The website can display different content based on what operating system or browser the visitor is using, whether she is using a PC or a mobile device, 
or even the source that referred the visitor. A dynamic Web page is not necessarily better than a static Web page
eg-online shopping website

----------------------------------
Client-side and Server-side Scripting
A script is a set of instructions. For Web pages they are instructions either to the Web browser (client-side scripting) or to the server (server-side scripting).
The client-side environment used to run scripts is usually a browser. The processing takes place on the end users computer.
The source code is transferred from the web server to the users computer over the internet and run directly in the browser.

The server-side environment that runs a scripting language is a web server. 
A user's request is fulfilled by running a script directly on the web server to generate dynamic HTML pages. 
This HTML is then sent to the client browser. It is usually used to provide interactive web sites that interface to databases or other data stores on the server.

Softwares for development
Chrome - done		
Vscode - done		
Github - done		
 Node - done		
Postman - done		
Github desktop or sourcetree - done		