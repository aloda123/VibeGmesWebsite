# Vibe Games Server - Stripe Integration

This is the backend server for Vibe Games with full Stripe payment integration.

## 🚀 Features

- **Express.js Server** - Fast and reliable backend
- **Stripe Integration** - Complete payment processing
- **CORS Enabled** - Cross-origin requests supported
- **Environment Configuration** - Secure API key management
- **Error Handling** - Comprehensive error management
- **Static File Serving** - Serves the frontend HTML

## 📋 Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- Stripe account (for API keys)

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Stripe

1. **Get Stripe API Keys:**
   - Go to [Stripe Dashboard](https://dashboard.stripe.com/)
   - Sign up or log in to your account
   - Go to Developers → API keys
   - Copy your **Publishable Key** and **Secret Key**

2. **Create Environment File:**
   ```bash
   cp env.example .env
   ```

3. **Update .env file:**
   ```env
   STRIPE_SECRET_KEY=sk_test_your_actual_secret_key_here
   STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key_here
   PORT=3001
   NODE_ENV=development
   ```

### 3. Start the Server

```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:3001`

## 🎯 API Endpoints

### GET `/api/config`
Returns Stripe publishable key for frontend initialization.

**Response:**
```json
{
  "publishableKey": "pk_test_..."
}
```

### POST `/api/create-payment-intent`
Creates a Stripe payment intent for processing payments.

**Request Body:**
```json
{
  "amount": 25.00,
  "currency": "usd"
}
```

**Response:**
```json
{
  "clientSecret": "pi_..._secret_...",
  "paymentIntentId": "pi_..."
}
```

### POST `/api/confirm-payment`
Confirms payment status after processing.

**Request Body:**
```json
{
  "paymentIntentId": "pi_..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Payment successful!",
  "amount": 25.00,
  "currency": "usd"
}
```

### GET `/api/health`
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Vibe Games Server is running"
}
```

## 💳 Testing Payments

### Test Card Numbers (Stripe Test Mode)

- **Successful Payment:** `4242 4242 4242 4242`
- **Declined Payment:** `4000 0000 0000 0002`
- **Requires Authentication:** `4000 0025 0000 3155`

### Test Card Details
- **Expiry Date:** Any future date (e.g., `12/25`)
- **CVC:** Any 3 digits (e.g., `123`)
- **ZIP:** Any 5 digits (e.g., `12345`)

## 🔒 Security Notes

- **Never commit your `.env` file** - It contains sensitive API keys
- **Use test keys for development** - Stripe provides separate test and live keys
- **HTTPS in production** - Always use HTTPS for live payments
- **Validate amounts** - Server validates payment amounts before processing

## 🐛 Troubleshooting

### Common Issues

1. **"Payment system is not ready"**
   - Check if server is running
   - Verify Stripe API keys in `.env`
   - Check browser console for errors

2. **CORS Errors**
   - Server includes CORS middleware
   - Ensure frontend is served from the same domain

3. **Payment Declined**
   - Use test card numbers provided above
   - Check Stripe dashboard for error details

### Debug Mode

Enable debug logging by setting:
```env
NODE_ENV=development
```

## 📚 Additional Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Express.js Documentation](https://expressjs.com/)
- [Stripe Test Cards](https://stripe.com/docs/testing#cards)

## 🚀 Deployment

For production deployment:

1. Set `NODE_ENV=production`
2. Use live Stripe keys (not test keys)
3. Enable HTTPS
4. Set up proper environment variables
5. Use a process manager like PM2

---

**Happy Coding! 🎮💳** 