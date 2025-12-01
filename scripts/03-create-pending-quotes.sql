-- Create pending_quotes table for user submissions
CREATE TABLE IF NOT EXISTS pending_quotes (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  author VARCHAR(255) DEFAULT 'Anonymous',
  genre VARCHAR(100) NOT NULL,
  submitter_email VARCHAR(255),
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  reviewed_at TIMESTAMP WITH TIME ZONE
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_pending_quotes_status ON pending_quotes(status);
CREATE INDEX IF NOT EXISTS idx_pending_quotes_genre ON pending_quotes(genre);
CREATE INDEX IF NOT EXISTS idx_pending_quotes_submitted_at ON pending_quotes(submitted_at);

-- Enable Row Level Security
ALTER TABLE pending_quotes ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (submit quotes)
CREATE POLICY "Anyone can submit quotes" ON pending_quotes
  FOR INSERT WITH CHECK (true);

-- Only allow reading via service role (admin)
CREATE POLICY "Service role can read all" ON pending_quotes
  FOR SELECT USING (true);

-- Only allow updates via service role (admin)
CREATE POLICY "Service role can update" ON pending_quotes
  FOR UPDATE USING (true);
