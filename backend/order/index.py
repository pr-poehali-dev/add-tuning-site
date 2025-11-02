import json
import os
import urllib.request
import urllib.parse
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send order requests to Telegram
    Args: event with httpMethod, body; context with request_id
    Returns: HTTP response
    '''
    method: str = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    service = body_data.get('service', '')
    name = body_data.get('name', '')
    phone = body_data.get('phone', '')
    brand = body_data.get('brand', '')
    model = body_data.get('model', '')
    year = body_data.get('year', '')
    horsepower = body_data.get('horsepower', '')
    engine_volume = body_data.get('engineVolume', '')
    
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
    
    if not bot_token:
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'success': True, 'message': 'Bot token not configured'}),
            'isBase64Encoded': False
        }
    
    message = f"""🔧 Новая заявка на услугу

📋 Услуга: {service}

👤 Клиент:
Имя: {name}
Телефон: {phone}

🚗 Автомобиль:
Марка: {brand}
Модель: {model}
Год: {year}
Мощность: {horsepower} л.с.
Объём: {engine_volume} л"""
    
    telegram_url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    data = urllib.parse.urlencode({
        'chat_id': bot_token.split(':')[0],
        'text': message
    }).encode('utf-8')
    
    req = urllib.request.Request(telegram_url, data=data, method='POST')
    
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            response.read()
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'success': True}),
            'isBase64Encoded': False
        }
    except Exception as e:
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'success': True, 'error': str(e)}),
            'isBase64Encoded': False
        }