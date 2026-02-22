import hashlib

def handler(request):
    uid = request.args.get("uid")

    if not uid:
        return {
            "statusCode": 400,
            "body": "UID parameter required"
        }

    total_avatars = 15

    hash_value = int(hashlib.md5(uid.encode()).hexdigest(), 16)
    avatar_number = (hash_value % total_avatars) + 1

    return {
        "statusCode": 302,
        "headers": {
            "Location": f"/avatars/{avatar_number}.png"
        }
    }
