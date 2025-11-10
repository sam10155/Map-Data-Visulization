#!/usr/bin/env python3
from http.server import SimpleHTTPRequestHandler, HTTPServer
import mimetypes
import socket
import sys

mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')

HOST = 'localhost'
PORT = 8080

class VerboseHandler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        method_color = "\033[94m" 
        path_color = "\033[92m"    
        reset_color = "\033[0m"
        sys.stdout.write(
            f"{method_color}{self.command}{reset_color} "
            f"{path_color}{self.path}{reset_color} "
            f"=> {format % args}\n"
        )

def run_server():
    server_address = (HOST, PORT)
    httpd = HTTPServer(server_address, VerboseHandler)

    local_ip = socket.gethostbyname(socket.gethostname())
    print(f"\n[-] Serving HTTP on \033[96mhttp://{HOST}:{PORT}\033[0m")
    print(f"💡 Accessible on local network (if allowed): \033[96mhttp://{local_ip}:{PORT}\033[0m\n")
    print("Press Ctrl+C to stop the server.\n")

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[x] Shutting down server...")
    finally:
        httpd.server_close()
        print("[+] Server stopped cleanly.\n")

if __name__ == "__main__":
    run_server()
