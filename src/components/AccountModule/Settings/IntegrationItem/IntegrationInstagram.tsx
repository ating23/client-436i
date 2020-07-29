import React, { useState } from "react"
import { Row, Col, Button } from "react-bootstrap"
import styled from "styled-components"
import { IntegrationIcon } from "./IntegrationIcon.model"

const ItemContainer = styled(Row)`
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
`

const IconContainer = styled.div``

const Icon = styled.img`
  display: block;
  height: 40px;
  margin-right: 10px;
  width: 40px;
`
export const ItemName = styled.p`
  font-size: 15px;
  margin: 0;
`

export const ItemNameDisable = styled(ItemName)`
  color: #999;
`

interface IntegrationItemProps {
  icon: IntegrationIcon
  service: string
}

export default function IntegrationInstagram(props: IntegrationItemProps) {
  const [isConnected, setConnected] = useState(false)

  async function handleConnect() {
    switch (props.service) {
      case "instagram": {
        setConnected(!isConnected)
      }
    }
  }

  const UsernameText = <ItemName>@eduardo</ItemName>

  const ConnectText = <ItemNameDisable>Connect Profile</ItemNameDisable>

  const DisconnectButton = (
    <Button onClick={handleConnect} variant="light">
      Disconnect
    </Button>
  )

  const ConnectButton = (
    <Button onClick={handleConnect} variant="primary">
      Connect
    </Button>
  )

  const ActivateIcon = <Icon src={props.icon.regular} />
  const DisableIcon = <Icon src={props.icon.disable} />

  return (
    <ItemContainer>
      <Col>
        <IconContainer className="d-flex align-items-center">
          {isConnected ? ActivateIcon : DisableIcon}
          {isConnected ? UsernameText : ConnectText}
        </IconContainer>
      </Col>
      <Col md="auto">{isConnected ? DisconnectButton : ConnectButton}</Col>
    </ItemContainer>
  )
}