import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { FileDTO } from './upload.dto';

@Injectable()
export class UploadService {
  async upload(file: FileDTO) {
    const supabase = createClient(
      process.env.SUPABASE_PROJECT_URL,
      process.env.SUPABASE_SERVICE_KEY,
      {
        auth: {
          persistSession: false, // for better gerenciament of the session
        },
      },
    );
    const data = await supabase.storage
      .from('imagens')
      .upload(`${file.originalname}`, file.buffer, {
        upsert: true, // if the file already exists, replace it
      });

    return data;
  }
}
