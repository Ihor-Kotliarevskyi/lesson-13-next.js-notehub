import Modal from '@/components/Modal/Modal';
import { getSingleNote } from '@/lib/api';

type Props = {
  readonly params: Promise<{ id: string }>;
};

async function NotePreview({ params }: Props) {
  const { id } = await params;
  const note = await getSingleNote(id);

  return (
    <Modal>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
};

export default NotePreview;