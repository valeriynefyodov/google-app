from datetime import datetime
from http.server import BaseHTTPRequestHandler, HTTPServer
from cgi import parse_header, parse_multipart
from urllib.parse import parse_qs
import json
import sys
import io

DEFAULT_PORT_NUMBER = 8088


class Handler(BaseHTTPRequestHandler):

    def do_GET(self):
        print('Received: GET')
        self.send_response(200, 'OK')

        response_body = ''
        if self.path.find('.json') != -1:
            self.send_header('Content-type', 'application/json')
            json_data = json.load(io.open('.' + self.path, encoding='utf-8'))
            response_body = bytes(json.dumps(json_data), 'utf-8')
        elif self.path.find('.png') != -1:
            self.send_header('Content-type', 'image/png')
            response_body = open('.' + self.path, 'rb').read()
        else:
            self.send_header('Content-type', 'text/html')

        self.send_header('Access-Control-Allow-Headers', 'x-requested-with')
        self.send_header('Access-Control-Max-Age:', '1728000')
        self.send_header('Access-Control-Allow-Origin', 'http://localhost:3000')
        self.send_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.end_headers()

        self.wfile.write(response_body)
        file = open('log.txt', 'a')
        file.write(str(datetime.now()) + ' Served: GET\n\n')
        file.close()
        return

    def parse_POST(self):
        ctype, pdict = parse_header(self.headers['content-type'])
        if ctype == 'multipart/form-data':
            postvars = parse_multipart(self.rfile, pdict)
        elif ctype == 'application/x-www-form-urlencoded':
            length = int(self.headers['content-length'])
            postvars = parse_qs(self.rfile.read(length), keep_blank_values=1)
        else:
            postvars = {}
        return postvars

    def do_POST(self):
        print('Received: POST')

        postvars = self.parse_POST()
        decoded = {}
        for key in postvars:
            decoded.update({key.decode('utf-8'): (postvars.get(key))[0].decode('utf-8')})

        self.send_response(200, 'OK')
        self.send_header('Content-type', 'text/html')
        self.send_header('Access-Control-Allow-Headers', 'x-requested-with')
        self.send_header('Access-Control-Max-Age:', '1728000')
        self.send_header('Access-Control-Allow-Origin', 'http://192.168.1.30:8080')
        self.send_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.end_headers()
        self.wfile.write(bytes('<script>alert("POST Received! Hello my darling!");</script>', 'utf-8'))
        file = open('log.txt', 'a')
        file.write(str(datetime.now()) + ' Served: POST \nData: ' + decoded['message'] + '\n\n')
        file.close()
        return

try:
    try:
        port_number = int(sys.argv[1])
    except IndexError:
        port_number = DEFAULT_PORT_NUMBER

    server = HTTPServer(('', port_number), Handler)
    print('Starting serving on port ', port_number, '...')
    server.serve_forever()
except KeyboardInterrupt:
    print('Interrupt received\nStop serving on port', port_number)
    server.socket.close()
