import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, CaretUp, CaretDown } from 'phosphor-react';

import { Game as Item } from '../CreateAdModal';

interface ItemListProps {
  onDataSelect: (id: string) => void;
  data: Item[];
}

export function Select({ data, onDataSelect }: ItemListProps) {
  return(
    <SelectPrimitive.Root onValueChange={onDataSelect}>
      <SelectPrimitive.Trigger className="bg-zinc-900 py-3 px-4 rounded text-sm text-zinc-500 flex items-center justify-between">
        <SelectPrimitive.Value placeholder="Qual o game que deseja jogar?" />
        <SelectPrimitive.Icon>
          <CaretDown />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className="overflow-hidden bg-zinc-900 rounded text-zinc-500 shadow-md">
          <SelectPrimitive.ScrollUpButton className="h-5 flex items-center justify-center">
            <CaretUp />
          </SelectPrimitive.ScrollUpButton>

          <SelectPrimitive.Viewport className="p-1">

              { data.map(item => {
                return(
                  <SelectPrimitive.Item
                    key={item.id}
                    value={item.id}
                    className="relative h-10 py-3 pl-4 pr-3 rounded hover:bg-zinc-800"
                  >
                    <SelectPrimitive.ItemText>{item.title}</SelectPrimitive.ItemText>
                    
                    <SelectPrimitive.ItemIndicator>
                      <Check className="absolute h-10 left-0 top-1" />
                    </SelectPrimitive.ItemIndicator>
                  </SelectPrimitive.Item>
                );
              }) }

          </SelectPrimitive.Viewport>

          <SelectPrimitive.ScrollDownButton>
            <CaretDown />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}