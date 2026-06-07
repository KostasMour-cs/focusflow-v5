#!/usr/bin/env python3
"""
Simple HTTP server for FocusFlow local testing.
Run: python3 serve.py
Then open: http://localhost:8080
"""
import http.server, socketserver, os

PORT = 8080
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        print(f"  {args[0]} {args[1]}")

print(f"FocusFlow server running at http://localhost:{PORT}")
print("Press Ctrl+C to stop.\n")
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
