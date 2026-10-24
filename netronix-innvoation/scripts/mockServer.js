/**
 * ==============================================================================
 * Netronix Innovation — Zero-Dependency Mock Backend Server
 * ==============================================================================
 * Run with: node scripts/mockServer.js  (or npm run mock)
 * Runs on: http://localhost:5000
 *
 * This server provides the live executable reference for your backend developers.
 * They can study this file, see the exact endpoint URLs, request bodies, and responses,
 * and replace it with their production Express, Django, FastAPI, Nest, or Go server.
 */

import http from "node:http";
import { URL } from "node:url";

const PORT = process.env.PORT || 5000;

// In-memory data store with realistic initial records
let quotes = [
  {
    id: "quote_1729432001",
    name: "Aayush Sharma",
    email: "aayush@himalayatech.com",
    phone: "+977 9841234567",
    company: "Himalaya Tech Pvt. Ltd.",
    service: "Website Development, Custom Software",
    budget: "Rs.60k - Rs.3L",
    timeline: "1-3 months",
    details: "Need a corporate web portal with multi-branch management and staff authentication.",
    files: [],
    status: "in-review",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
  },
  {
    id: "quote_1729432002",
    name: "Sunita Thapa",
    email: "sunita@chitwanagro.np",
    phone: "+977 9801234567",
    company: "Chitwan Agro Hub",
    service: "Mobile Application, UI/UX Design",
    budget: "Rs.35k - Rs.60k",
    timeline: "3-6 months",
    details: "Mobile app for farmers to check fertilizer pricing and place delivery orders.",
    files: [],
    status: "pending",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
];

let contacts = [
  {
    id: "msg_1729432001",
    name: "Bikash Adhikari",
    email: "bikash@kalikagroup.com",
    phone: "+977 9856012345",
    subject: "Office Networking & CCTV Installation",
    message: "We are relocating our corporate office in Bharatpur and need a complete MikroTik Wi-Fi setup and 16 IP CCTV cameras.",
    status: "unread",
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
];

// Helper to set CORS and JSON headers
function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  });
  res.end(JSON.stringify(data));
}

// Helper to parse JSON body
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(err);
      }
    });
    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    });
    return res.end();
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname.replace(/\/$/, "");
  const method = req.method;

  console.log(`[MOCK BACKEND] ${method} ${pathname}`);

  // 1. Health check
  if (pathname === "/api/health" && method === "GET") {
    return sendJson(res, 200, {
      status: "ok",
      server: "Netronix Innovation Mock Backend",
      uptimeSeconds: Math.round(process.uptime()),
      timestamp: new Date().toISOString(),
    });
  }

  // 2. Quotes Endpoints
  if (pathname === "/api/quotes") {
    if (method === "GET") {
      return sendJson(res, 200, quotes);
    }

    if (method === "POST") {
      try {
        const body = await parseBody(req);
        const newQuote = {
          ...body,
          id: body.id || `quote_${Date.now()}`,
          status: body.status || "pending",
          createdAt: body.createdAt || new Date().toISOString(),
        };
        quotes.unshift(newQuote);
        console.log(`[MOCK BACKEND] + Saved new quote: ${newQuote.name} (${newQuote.id})`);
        return sendJson(res, 201, { success: true, data: newQuote });
      } catch (e) {
        return sendJson(res, 400, { success: false, error: "Invalid JSON payload" });
      }
    }
  }

  // Delete Quote: DELETE /api/quotes/:id
  if (pathname.startsWith("/api/quotes/") && method === "DELETE") {
    const id = pathname.replace("/api/quotes/", "");
    quotes = quotes.filter((q) => String(q.id) !== String(id));
    console.log(`[MOCK BACKEND] - Deleted quote id: ${id}`);
    return sendJson(res, 200, { success: true, message: "Quote deleted successfully" });
  }

  // 3. Contacts Endpoints
  if (pathname === "/api/contacts") {
    if (method === "GET") {
      return sendJson(res, 200, contacts);
    }

    if (method === "POST") {
      try {
        const body = await parseBody(req);
        const newMsg = {
          ...body,
          id: body.id || `msg_${Date.now()}`,
          status: "unread",
          createdAt: body.createdAt || new Date().toISOString(),
        };
        contacts.unshift(newMsg);
        console.log(`[MOCK BACKEND] + Saved contact message from: ${newMsg.name}`);
        return sendJson(res, 201, {
          success: true,
          message: "Thank you! Your message has been sent successfully. Our team will contact you shortly.",
          data: newMsg,
        });
      } catch (e) {
        return sendJson(res, 400, { success: false, error: "Invalid JSON payload" });
      }
    }
  }

  // Delete Contact: DELETE /api/contacts/:id
  if (pathname.startsWith("/api/contacts/") && method === "DELETE") {
    const id = pathname.replace("/api/contacts/", "");
    contacts = contacts.filter((c) => String(c.id) !== String(id));
    console.log(`[MOCK BACKEND] - Deleted contact message id: ${id}`);
    return sendJson(res, 200, { success: true, message: "Message deleted successfully" });
  }

  // 404 for unknown routes
  return sendJson(res, 404, {
    error: `Route not found: ${method} ${pathname}`,
    availableEndpoints: [
      "GET /api/health",
      "GET /api/quotes",
      "POST /api/quotes",
      "DELETE /api/quotes/:id",
      "GET /api/contacts",
      "POST /api/contacts",
      "DELETE /api/contacts/:id",
    ],
  });
});

server.listen(PORT, () => {
  console.log(`
===================================================================
🚀 Netronix Innovation Mock Backend is running on:
   http://localhost:${PORT}

Available Endpoints:
   • GET  /api/health
   • GET  /api/quotes
   • POST /api/quotes
   • DELETE /api/quotes/:id
   • GET  /api/contacts
   • POST /api/contacts
   • DELETE /api/contacts/:id

CORS enabled for all origins. Press Ctrl+C to stop.
===================================================================
  `);
});
