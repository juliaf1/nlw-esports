import { useState } from 'react';
import * as Toggle from '@radix-ui/react-toggle-group';

interface ToggleGroupProps {
  onDataToggle: (items: string[]) => void;
  data: string[];
};

export function ToggleGroup({ data, onDataToggle }: ToggleGroupProps) {
  const [items, setItems] = useState<string[]>([]);

  function handleValueChange(items: string[]) {
    setItems(items);
    onDataToggle(items);
  };

  return(
    <Toggle.Root
      type="multiple"
      className="grid grid-cols-4 gap-2"
      value={items}
      onValueChange={handleValueChange}
    >
      {
        data.map((item, index) => {
          const id = index.toString();
          return(
            <Toggle.Item
              key={id}
              value={id}
              title={item}
              className={`w-8 h-8 rounded ${items.includes(id) ? 'bg-violet-500' : 'bg-zinc-900'}`}
            >
              {item[0]}
            </Toggle.Item>
          );
        })
      }
    </Toggle.Root>
  );
}