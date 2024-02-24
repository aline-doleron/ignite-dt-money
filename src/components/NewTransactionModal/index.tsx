import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { TransactionType, TransactionTypeButton } from '../Header/styles';

export function NewTransactionModal() {

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                <CloseButton>
                    <X size={24} />
                </CloseButton>
                <form>
                    <input type='text' placeholder='Descrição' required />
                    <input type='number' placeholder='Preço' required />
                    <input type='text' placeholder='Categoria' required />

                    <TransactionType>
                        <TransactionTypeButton value='income' variant='income'>
                            <ArrowCircleUp size={24} />
                            Entrada
                        </TransactionTypeButton>

                        <TransactionTypeButton value='outcome' variant='outcome'>
                            <ArrowCircleDown size={24} />
                            Saída
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type='submit'>Cadastrar</button>
                </form>
                <Dialog.Close />
            </Content>
        </Dialog.Portal >
    )
}