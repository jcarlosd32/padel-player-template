import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../supabase/supabaseClient';

export default function PlayerPage() {
  const { slug } = useParams();
  const [player, setPlayer] = useState<any>(null);

  useEffect(() => {
    async function fetchPlayer() {
      const { data } = await supabase
        .from('players')
        .select('*')
        .eq('slug', slug)
        .single();
      setPlayer(data);
    }

    fetchPlayer();
  }, [slug]);

  if (!player) return <p>Cargando jugador...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{player.name}</h1>
      <p>{player.bio?.es}</p>
    </div>
  );
}