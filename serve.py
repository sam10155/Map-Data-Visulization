from http.server import SimpleHTTPRequestHandler, HTTPServer
import mimetypes

mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')

HTTPServer(('localhost', 8080), SimpleHTTPRequestHandler).serve_forever()
