const apiDocs = [
  {
    "title": "API Reference",
    "id": "introduction",
    "mainUrl": "/docs/api-reference/introduction",
    "sections": [
      {
        "title": "API Interaction",
        "id": "api-interaction",
        "contents": [
          "Interact with the API using HTTP or WebSocket requests from any language.",
          "Official Python bindings: Install with `pip install alle-ai`.",
          "Official Node.js library: Install with `npm install alle-ai` in your project directory."
        ]
      }
    ]
  },
  {
    "title": "Authentication",
    "id": "authentication",
    "mainUrl": "/docs/api-reference/authentication",
    "sections": [
      {
        "title": "API Keys",
        "id": "api-keys",
        "contents": [
          "Use API key authentication to secure access to all endpoints.",
          "Include a valid API key in the `X-API-Key` header for every request."
        ]
      },
      {
        "title": "Obtain Key",
        "id": "obtain-api-key",
        "contents": [
          "Obtain an API key by registering for an account and navigating to the API Keys section in your dashboard."
        ]
      },
      {
        "title": "Python SDK Authentication",
        "id": "auth-pythonSDK",
        "contents": [
          "Initialize the Alle AI client in Python using your API key."
        ]
      },
      {
        "title": "Node.js SDK Authentication",
        "id": "auth-nodejs",
        "contents": [
          "Initialize the Alle AI client in Node.js using your API key."
        ]
      }
    ]
  },
  {
    "title": "SDKs",
    "id": "sdk",
    "mainUrl": "/docs/api-reference/sdk",
    "sections": [
      {
        "title": "Python SDK",
        "id": "python-sdk-api",
        "contents": [
          "The Alle AI Python SDK provides a simple interface for interacting with the API."
        ]
      },
      {
        "title": "Node.js SDK",
        "id": "nodejs-sdk-api",
        "contents": [
          "The Alle AI Node.js SDK supports modern JavaScript and TypeScript applications."
        ]
      },
      {
        "title": "Best Practices",
        "id": "best-practise-sdk",
        "contents": [
          "Store API keys in environment variables to avoid hardcoding.",
          "Use try-catch blocks for error handling.",
          "Use TypeScript with Node.js for better type safety and autocompletion.",
          "Regularly update SDKs for the latest features and bug fixes."
        ]
      }
    ]
  },
  {
    "title": "Chat Endpoints",
    "id": "chat-endpoints",
    "mainUrl": "/docs/api-reference/chat-endpoints",
    "sections": [
      {
        "title": "Chat Completion",
        "id": "chat-chat-completion",
        "contents": [
          "The Chat Completion endpoint provides access to multiple AI models (e.g., ChatGPT, Claude, Gemini) for generating human-like text.",
          "Supported models: GPT-3.5, GPT-4, Claude, Gemini, and more."
        ]
      },
      {
        "title": "Completion Endpoint",
        "id": "chat-completion-ends",
        "contents": [
          "Make all completion API requests to the base URL using HTTPS."
        ]
      },
      {
        "title": "Request Parameters",
        "id": "completion-params",
        "contents": [
          "Specify AI model names (e.g., gpt-4, deepseek-1, claude-3.5-sonnet) to process requests.",
          "Provide inputs including system instructions, user inputs (text, audio, images, videos), and prior assistant responses.",
          "Control output format (text, audio URL, image URL, video URL) and model-specific formats.",
          "Enable web search with `web_search: true` to include external information.",
          "Configure summary format and models for concise responses.",
          "Merge responses from multiple models into a single output using the `combination` field.",
          "Adjust creativity with `temperature` (0.1 for focused, up to 1.0 for creative).",
          "Set response length limits (e.g., words or characters).",
          "Control response variety with `top_p` (0.5 for focused, up to 1.0 for diverse).",
          "Manage repetition with `frequency_penalty` (-2.0 to 2.0).",
          "Encourage new topics with `presence_penalty` (-2.0 to 2.0).",
          "Enable streaming with `stream: true` for real-time updates or `false` for complete responses.",
          "Fine-tune model-specific settings (e.g., instructions, creativity, length)."
        ]
      },
      {
        "title": "API Response Format",
        "id": "response-format-chat",
        "contents": [
          "Includes success status, response data, unique identifier, and object type (e.g., ai.completions).",
          "Contains creation timestamp, timezone, and list of used models.",
          "Provides response content per model, stop reason, token usage, and cost details."
        ]
      }
    ]
  },
  {
    "title": "Web Search",
    "id": "chat-search",
    "mainUrl": "/docs/api-reference/chat-search",
    "sections": [
      {
        "title": "Web Search in Chat Completions",
        "id": "web-search-completions",
        "contents": [
          "Enable web search in the Completion Endpoint with `web_search: true` to include external information."
        ]
      },
      {
        "title": "Web Search Response",
        "id": "web-search-response",
        "contents": [
          "If `web_search: true`, the response includes a `web_search_results` field with results used to enhance the model\u00e2\u20ac\u2122s response."
        ]
      },
      {
        "title": "Dedicated Web Search Endpoints",
        "id": "web-search-endpoint",
        "contents": [
          "Use dedicated web search endpoints for focused search capabilities."
        ]
      }
    ]
  },
  {
    "title": "Model Output Comparison",
    "id": "chat-comparison",
    "mainUrl": "/docs/api-reference/chat-comparison",
    "sections": [
      {
        "title": "Model Output Comparison",
        "id": "model-output-compare",
        "contents": [
          "Use the optional `comparison` field to compare outputs across AI models.",
          "Supported comparison types: `text`, `audio_url`.",
          "Specify model combinations in the `models` array (e.g., `gpt-4o+deepseek-r1+claude-3.5-sonnet`) for ensemble comparisons."
        ]
      }
    ]
  },
  {
    "title": "Summarize Responses",
    "id": "chat-summary",
    "mainUrl": "/docs/api-reference/chat-summary",
    "sections": [
      {
        "title": "Summary in Completion Endpoint",
        "id": "summary-completion",
        "contents": [
          "Generate summaries from multiple models in the Completion Endpoint."
        ]
      },
      {
        "title": "Dedicated Summary Endpoints",
        "id": "summary-endpoints",
        "contents": [
          "Use `base URL/summary` for streamlined summaries without individual model outputs.",
          "Specify query messages, response format (text, audio URL, etc.), and settings like `temperature`."
        ]
      }
    ]
  },
  {
    "title": "Combine Responses",
    "id": "chat-combination",
    "mainUrl": "/docs/api-reference/chat-combination",
    "sections": [
      {
        "title": "Combinations in Completion Endpoint",
        "id": "combination-completion",
        "contents": [
          "Combine responses from multiple models in the Completion Endpoint."
        ]
      },
      {
        "title": "Dedicated Combination Endpoints",
        "id": "combination-endpoints",
        "contents": [
          "Use `base URL/combinations` for synthesized outputs from specified models.",
          "Specify query messages, response format, and model combinations (e.g., `gpt-4o+claude-3.5-sonnet`)."
        ]
      }
    ]
  },
  {
    "title": "Image Generation",
    "id": "image-generation",
    "mainUrl": "/docs/api-reference/image-generation",
    "sections": [
      {
        "title": "Image Generation API",
        "id": "image-generation-api",
        "contents": [
          "Generate or edit images using multiple AI models for diverse outputs.",
          "Supports text-to-image generation and image editing.",
          "Requires API key authentication via the `X-API-Key` header."
        ]
      },
      {
        "title": "Text-to-Image API",
        "id": "text-to-image-api",
        "contents": [
          "Generate images from text prompts using multiple models.",
          "Request body: array of models, text description, optional parameters (number of images, height, width, seed, style)."
        ]
      }
    ]
  },
  {
    "title": "Image Editing",
    "id": "image-generation-edits",
    "mainUrl": "/docs/api-reference/image-generation-edits",
    "sections": [
      {
        "title": "Image Editing API",
        "id": "image-edits-api",
        "contents": [
          "Edit images using a base64-encoded image or URL and a text prompt (max 1000 characters).",
          "Specify an array of models for editing."
        ]
      }
    ]
  },
  {
    "title": "Audio Generation",
    "id": "audio-text-to-speech",
    "mainUrl": "/docs/api-reference/audio-text-to-speech",
    "sections": [
      {
        "title": "Audio Generation API",
        "id": "audio-generation-api",
        "contents": [
          "Supports text-to-speech, speech-to-text, and audio generation from text.",
          "Requires API key authentication via the `X-API-Key` header."
        ]
      },
      {
        "title": "Text-to-Speech API",
        "id": "text-to-speech-api",
        "contents": [
          "Generate audio from text using multiple audio models.",
          "Request body: array of models, text input, optional voice and model-specific parameters."
        ]
      },
      {
        "title": "Speech-to-Text API",
        "id": "speech-to-text-api",
        "contents": [
          "Transcribe audio into text using supported formats (flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, webm).",
          "Request body: array of models, audio file path or URL, optional model-specific parameters."
        ]
      },
      {
        "title": "Audio Generation API",
        "id": "audio-generate-api",
        "contents": [
          "Generate audio (sounds, music) from text prompts (max 4096 characters).",
          "Request body: array of models, text description, optional parameters (duration, tempo, genre, instruments, quality, format, loopable, mood, volume)."
        ]
      }
    ]
  },
  {
    "title": "Text-to-Video",
    "id": "video-generation",
    "mainUrl": "/docs/api-reference/video-generation",
    "sections": [
      {
        "title": "Text-to-Video API",
        "id": "text-to-video-api",
        "contents": [
          "Generate videos from text prompts (max 4096 characters) using multiple models.",
          "Request body: array of models, text description, optional parameters (duration, loop, aspect ratio, frame rate, resolution, seed).",
          "Asynchronous processing returns a `job_id` to poll status via the status endpoint."
        ]
      }
    ]
  },
  {
    "title": "Error Handling",
    "id": "error-handling",
    "mainUrl": "/docs/api-reference/error-handling",
    "sections": [
      {
        "title": "Error Handling with SDK",
        "id": "error-handling",
        "contents": [
          "Error types: `AlleAIError` (base), `APIError` (unexpected errors), `AuthenticationError` (invalid API key), `InvalidRequestError` (malformed requests).",
          "Common HTTP status codes guide recommended actions.",
          "Implement retry logic with exponential backoff for transient errors.",
          "Handle specific errors appropriately and log with relevant context.",
          "Use try/except blocks and validate parameters before requests.",
          "Enable verbose logging and inspect response headers for debugging."
        ]
      }
    ]
  },
  {
    "title": "File Uploads",
    "id": "upload-files",
    "mainUrl": "/docs/api-reference/upload-files",
    "sections": [
      {
        "title": "File Inputs",
        "id": "file-inputs",
        "contents": [
          "Provide files via URL or base64-encoded string."
        ]
      },
      {
        "title": "Supported File Types",
        "id": "upload-limits",
        "contents": [
          "Maximum file size: 10MB for base64-encoded files.",
          "Supported formats depend on the endpoint.",
          "URLs must be publicly accessible.",
          "Exclude data URI prefix from base64 strings."
        ]
      }
    ]
  }
];